import { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/logo/logo.png'
import {
  ChevronDown,
  User
} from 'lucide-react';
import { Link } from 'react-router';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { authApi, useGetCurrentUserQuery, useUserLogoutMutation } from '@/redux/features/auth/auth.api';
import { toast } from 'sonner';
import { useAppDispatch } from '@/redux/hook';
import { useGetSingleWalletQuery } from '@/redux/features/wallet/wallet.api';

// Standalone Navigation Header Component (Static Logged-In View)
export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [userLogout] = useUserLogoutMutation()
  const { data, isSuccess } = useGetCurrentUserQuery(undefined)
  const { data: userWallet } = useGetSingleWalletQuery(undefined)
  const dispatch = useAppDispatch()

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { name, email, role } = data?.data || {}


  // Logout user
  const handleLogout = async () => {
    try {
      const res = await userLogout(undefined).unwrap()
      dispatch(authApi.util.resetApiState())

      if (res?.success) {
        toast.success('Successfully loged out.')
      }
    } catch (error: any) {
      console.error(error)
      toast.success(error?.data?.message)
    }

  }

  // A static user object for display purposes
  const user = {
    email: 'user@example.com',
    displayName: 'User',
    photoURL: 'https://placehold.co/100x100/EFEFEF/4A4A4A?text=U'
  };

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handlers for mouse enter/leave to manage dropdown visibility with a delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsUserDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsUserDropdownOpen(false);
    }, 150); // Small delay to prevent flicker
  };

  // Toggles dropdown on click
  const handleDropdownClick = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };


  // Navigation items configuration
  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'Transactions', slug: '/transactions' },
    { name: 'Pricing', slug: '/pricing' },
    { name: 'Contact', slug: '/contact' },
    ...(isSuccess && role ? [
      {
        name: 'Dashboard',
        slug: role === 'ADMIN' ? '/admin' :
          role === 'AGENT' ? '/agent' :
            role === 'USER' ? '/user' : '/'
      }
    ] : []),
    { name: 'About', slug: '/about' },
  ];

  return (
    <div className="font-sans fixed w-full block z-[9999]">
      <header className="relative">
        <div className="bg-primary border border-primary p-4 text-white dark:text-foreground dark:bg-gray-900 dark:border-none">
          <div className="container mx-auto">
            <div className="flex items-center justify-between gap-4">
              {/* Logo and Desktop Navigation */}
              <div className="flex items-center space-x-2 sm:space-x-8">
                <Link to='/'>
                  <div className='flex items-center gap-1'>
                    <img src={logo} className='w-[60px]' alt="payra pay logo" />
                    <h2 className='font-bold text-2xl mb-3'>Payra Pay</h2>
                  </div>
                </Link>

                <nav className="hidden lg:flex space-x-1">
                  {navItems.map((item, index) => {
                    return (
                      <Link key={index} to={item.slug}>
                        <button
                          key={item.name}
                          onClick={() => setActiveTab(item.name)}
                          className={`
                        flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer
                        ${activeTab === item.name
                              ? 'bg-secondary text-white'
                              : 'hover:text-white hover:bg-secondary dark:text-foreground'}
                      `}
                        >
                          <span className="font-medium">{item.name}</span>
                        </button>
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile Menu Hamburger Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-xl bg-white border border-primary hover:bg-white transition-all duration-300"
                >
                  <div className="w-5 h-5 flex flex-col justify-center items-center">
                    <div className={`w-4 h-0.5 bg-primary dark:bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
                    <div className={`w-4 h-0.5 bg-primary dark:bg-gray-900  mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-4 h-0.5 bg-primary dark:bg-gray-900  mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                  </div>
                </button>
              </div>

              {/* Right side: Search, Notifications, and User Profile */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                {userWallet?.data && <p className='font-medium'>{userWallet?.data?.balance} Taka</p>}

                {/* User Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="flex items-center space-x-1 sm:space-x-3 cursor-pointer hover:bg-white p-2 rounded-xl transition-all duration-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleDropdownClick}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center border border-gray-700">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <ChevronDown className={`h-4 w-4 text-gray-500 hidden sm:block transition-transform duration-300 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown Menu */}
                  {isUserDropdownOpen && (
                    <div
                      className="absolute right-0 mt-2 w-64 bg-black border border-gray-800 rounded-xl shadow-2xl py-2 z-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-4 py-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center border border-gray-700">
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
                                alt="User avatar"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="h-6 w-6 text-white" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate">
                              {name || 'User'}
                            </p>
                            <p className="text-gray-400 text-sm truncate">
                              {email}
                            </p>
                          </div>
                        </div>

                        {isSuccess && role &&
                          <Link to={`${role === 'ADMIN' ? '/admin' : role === 'AGENT' ? '/agent' : role === 'USER' ? '/user' : '/'}`}>
                            <Button className='mt-5 w-full cursor-pointer'>Dashboard</Button>
                          </Link>
                        }
                        <Link to={'/signup'}>
                          <Button className='mt-5 w-full cursor-pointer'>Create Account</Button>
                        </Link>
                        {email ?
                          <Button onClick={handleLogout} className='mt-5 w-full cursor-pointer'>Logout</Button>
                          :
                          <Link to='/login'>
                            <Button className='mt-5 w-full cursor-pointer'>Login</Button>
                          </Link>
                        }

                      </div>
                    </div>
                  )}
                </div>

                {/* mode toggler for theme switcher  */}
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-800">
                <nav className="grid grid-cols-2 gap-2">
                  {navItems.map((item) => {
                    return (
                      <Link to={item?.slug}>
                        <button
                          key={item.name}
                          onClick={() => {
                            setActiveTab(item.name);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`
                        flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300
                        ${activeTab === item.name
                              ? 'bg-gray-800 text-white'
                              : 'hover:text-white hover:bg-gray-900'}
                      `}
                        >
                          <span className="font-medium">{item.name}</span>
                        </button>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}


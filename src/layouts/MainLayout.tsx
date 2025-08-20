import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
        <div className="flex-grow">
          <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}

export default MainLayout

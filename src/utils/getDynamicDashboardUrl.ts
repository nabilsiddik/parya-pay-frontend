export const getDynamicDashboardUrl = (userData: any) => {
    switch (userData.role) {
        case 'ADMIN':
            return '/admin'
        case 'USER':
            return '/user'
        case 'AGENT':
            return '/agent'
        default:
            return '/login'
    }
}
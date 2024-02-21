import SideBar from './side_nav'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    // Main layout should have a side bar with the main content like 75% of the screen from the right side.
    // Side bar should be like 25% of the left side of the screen

    return (
        <div className="flex h-screen mt-4 ml-4">
            <div className='md:w-64 mr-5'>
                <SideBar /> 
            </div>
            <div className='flex-grow'>
                {children}
            </div>
        </div>
    )
}
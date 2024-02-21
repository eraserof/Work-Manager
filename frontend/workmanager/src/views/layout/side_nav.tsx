import { Fonts } from "../fonts"
import Logo from "../logo"
import { Link } from 'react-router-dom'

// These links should be in the db somewhere and given to us on login
const links = [
    // { name: 'Home', href: '/dashboard', icon:  Fonts.},
    {
        name: 'Work',
        href: '/work',
        icon: Fonts.briefCase,
    },
    { name: 'Service', href: '/service', icon: Fonts.wallet },
    { name: 'Request', href: '/request', icon: Fonts.clipBoard },
    { name: 'Dashboard', href: '/dashboard', icon: Fonts.calendar },
];

export default function SideBar() {
    const Link1 = links[0].icon
    const Link2 = links[1].icon
    const Link3 = links[2].icon
    return (
        // outer div
        <div className="flex-row h-full">
            {/* contents of the side bar */}
            <div className="flex h-20 items-center justify-center bg-blue-600 text-white rounded-md">
                <Logo />
            </div>
            {/* This entire section needs a template (they are just repeats), and links here so that they are only displaying what is needed */}
            {/* For now, just have the work, request showing */}
            <div className="flex grow flex-col justify-between p-1 pt-2 pb-2 space-x-2 md:space-x-0 md:space-y-2">
                <div>
                    <li className="flex grow items-center text-sm font-medium h-[48px] p-2 bg-gray-200 md:hover:bg-blue-200 rounded-md md:hover:text-blue-700">
                        <Link className="flex flex-row-reverse" to={links[3].href}>{links[3].name}
                            <Link3 className="w-6" />
                        </Link>
                    </li>
                </div>
                <div>
                    <li className="flex grow items-center text-sm font-medium h-[48px] p-2 bg-gray-200 md:hover:bg-blue-200 rounded-md md:hover:text-blue-700">
                        <Link className="flex flex-row-reverse" to={links[0].href}>{links[0].name}
                            <Link1 className="w-6" />
                        </Link>
                    </li>
                </div>
                <div>
                    <li className="flex grow items-center text-sm font-medium h-[48px] p-2 bg-gray-200 md:hover:bg-blue-200 rounded-md md:hover:text-blue-700">
                        <Link className="flex flex-row-reverse" to={links[1].href}>{links[1].name}
                            <Link2 className="w-6" />
                        </Link>
                    </li>
                </div>
                <div>
                    <li className="flex grow items-center text-sm font-medium h-[48px] p-2 bg-gray-200 md:hover:bg-blue-200 rounded-md md:hover:text-blue-700">
                        <Link className="flex flex-row-reverse" to={links[2].href}>{links[2].name}
                            <Link3 className="w-6" />
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}
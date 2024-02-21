import {
    KeyIcon,
    AtSymbolIcon
} from '@heroicons/react/24/outline'
import { useState } from "react";
import { Fonts } from '../views/fonts';
import { useAuth } from '../components/auth/auth_context';

export default function LoginForm() {
    const auth = useAuth();
    
    function handelUsernameInput() {
        console.log("input handle")
    }

    function handelPasswordInput() {
        console.log("input handle")
    }

    function onSubmit() {
        console.log("submit button pressed")
        auth?.loginAction({});
        // Make the call to the server to check auth
        // parse the response
        // if a token is returned
        // save the username, userid, token, to auth component
        // No need to save to localStorage or localSeesion
        // if (parsedCredentials.success) {
        //     const { email, password } = parsedCredentials.data;
        //     const user = await getUser(email);
        //     if (!user) return null;
        //     const passwordsMatch = await bcrypt.compare(password, user.password);

        //     if (passwordsMatch) return user;
        // }

        console.log('Invalid credentials');
        return null;
    }

    const Arrow = Fonts.arrow
    return (
        <form onSubmit={onSubmit} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className={` mb-3 text-2xl`}>
                    Please log in to continue.
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div>
                        <button className='flex h-10 items-center mt-4 rounded-lg text-sm font-medium px-4 w-full md:hover:bg-blue-400 md:bg-blue-500 text-white'>
                            Login <Arrow className='ml-auto h-5 w-5 text-gray-50'></Arrow>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
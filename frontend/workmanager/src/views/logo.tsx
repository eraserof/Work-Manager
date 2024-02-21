import { Fonts } from "./fonts"

export default function Logo() {
    return (
        <div className="flex flex-row items-end">
            <div>
                <Fonts.briefCase className="w-12 h-12"></Fonts.briefCase>
            </div>
            <p className="text-xl">Work Manager</p>
        </div>
    )
}
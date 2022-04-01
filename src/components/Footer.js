export default function Footer() {

    return (
        <div className="w-full flex p-8 h-24 border-t border-opacity-40 z-50">
            <div className="flex flex-row-reverse gap-x-8 ml-auto my-auto">
                {/* Footer Elements */}
                <div className="cursor-pointer transition duration-500 hover:text-white text-gray-600 opacity-70 z-50">
                    Terms of Service
                </div>
                <div className="cursor-pointer transition duration-500 hover:text-white text-gray-600 opacity-70 z-50">
                    About Us
                </div>
                <div className="cursor-pointer transition duration-500 hover:text-white text-gray-600 opacity-70 z-50">
                    Contact Us
                </div>
            </div>
        </div>
    )
}
import ResetExpiredImage from "../../assets/reset_expire.png";

export default function TokenExpired() {

    return (
        <div className="w-screen h-screen bg-yellow-400">
            <div className="fixed p-4 bg-gray-300 bg-opacity-70 shadow-xl rounded-xl left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col">
                    <span className="m-auto font-bold text-4xl text-white">Link Expired</span>
                    <span className="m-auto pt-1 font-bold text-gray-500 text-xs">Please request a new password reset email!</span>
                    <img src={ResetExpiredImage} className="w-1/2 m-auto" />
                </div>
            </div>
        </div>
    )
}
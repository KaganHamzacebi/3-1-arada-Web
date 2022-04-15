import ResetFailedImage from "../../assets/reset_failed.png";

export default function ResetFailed() {

    return (
        <div className="w-screen h-screen bg-red-800">
            <div className="fixed p-4 bg-gray-300 bg-opacity-70 shadow-xl rounded-xl left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col">
                    <span className="m-auto font-bold text-4xl text-red-800">Password Reset Failed</span>
                    <span className="m-auto pt-1 font-bold text-gray-500 text-xs">Please try again later!</span>
                    <img src={ResetFailedImage} className="w-1/2 m-auto" />
                </div>
            </div>
        </div>
    )
}
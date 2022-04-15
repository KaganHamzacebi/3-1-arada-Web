import ResetSuccessImage from "../../assets/reset_success.png";

export default function ResetSuccess() {

    return (
        <div className="w-screen h-screen bg-green-500">
            <div className="fixed p-4 bg-gray-300 bg-opacity-70 shadow-xl rounded-xl left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col gap-y-8">
                    <span className="m-auto font-bold text-4xl text-green-500">Password Successfully Reset</span>
                    <img src={ResetSuccessImage} className="w-1/2 m-auto" />
                </div>
            </div>
        </div>
    )
}
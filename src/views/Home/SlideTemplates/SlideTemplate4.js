export default function SlideTemplate4(
    props
) {

    return (
        <div className="flex">
            <div className="grid grid-cols-1 md:grid-cols-2 opacity-95 py-6 md:px-24 rounded-xl">
                <div className="col-span-1 relative">
                    <img src={props.img1} alt={props.alt1} className="absolute ml-4 m-auto h-128"/>
                    <img src={props.img2} alt={props.alt2} className="absolute right-20 top-56 transform -rotate-90 ml-4 m-auto h-96"/>
                </div>
                <div className="m-auto col-span-1 px-4 py-4 md:px-24 flex flex-col gap-y-4">
                    <span className="font-bold text-3xl text-white">{props.header}</span>
                    <span className="text-xl text-white">{props.body}</span>
                </div>
            </div>
        </div>
    )
}
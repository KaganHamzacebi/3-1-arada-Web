export default function SlideTemplate1(
    props
) {

    return (
        <div className="flex">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 opacity-95 py-6 rounded-xl">
                <div className="col-span-1">
                    <img src={props.img} alt={props.alt} className="ml-4 m-auto h-128"/>
                </div>
                <div className="m-auto col-span-2 px-4 py-4 md:px-24 flex flex-col gap-y-4">
                    <span className="font-bold text-3xl text-white">{props.header}</span>
                    <span className="text-xl text-white">{props.body}</span>
                </div>
            </div>
        </div>
    )
}
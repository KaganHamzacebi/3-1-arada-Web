import './Loading.css';

export default function Loading() {

    return (
        <div className='flex w-screen h-screen bg-green-100'>
            <div className="m-auto loader">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </div>
    )
}
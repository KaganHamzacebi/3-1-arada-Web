import "./Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Flower from "../../assets/images/3.png";
import Leaf from "../../assets/images/7.png";
import Cactus from "../../assets/images/9.png";


export default function Home() {

    return (
        <div id="homeWrapper">
            <Header/>
            <img src={Flower} className="fixed hidden md:block transform scale-50 -right-40 -bottom-56 z-50" />
            <img src={Leaf} className="fixed hidden scale-75 rotate-18 md:block transform scale-50 -left-30 -bottom-56 z-50" />
            <img src={Cactus} className="fixed hidden md:block transform scale-50 -left-40 -bottom-56 z-40" />
            <div className="pt-48 pb-40 md:pt-60 px-8 md:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:grid-flow-col gap-x-16 gap-y-4">
                    <div className="row-span-2 px-8 py-12 bg-theme-gray rounded-xl opacity-95 shadow-xl transition duration-700 transform hover:scale-105">
                        <h1 className="text-2xl uppercase font-bold">Ilerleme</h1>
                        <h1 className="text-2xl font-black mt-8">Müşterilerimize güç katıyoruz</h1>
                        <h1 className="mt-8">Bu alanda 20 yılı aşkın danışmanlık deneyimine sahibiz ve şunlara ulaşmak
                            için çabalıyoruz: gelişmek, güçlenmek, imkan tanımak ve sürdürmek.</h1>
                    </div>
                    <div className="row-span-1 p-6 bg-theme-gray rounded-xl opacity-95 shadow-xl transition duration-700 transform hover:scale-105">
                        <h1 className="text-2xl uppercase font-bold">Beslenme</h1>
                        <div className="flex mt-8 gap-8">
                            <span className="text-6xl font-bold m-auto">%32</span>
                            <span>Bu alanda 20 yılı aşkın danışmanlık deneyimine sahibiz ve şunlara ulaşmak için çabalıyoruz: gelişmek, güçlenmek, imkan tanımak ve sürdürmek.</span>
                        </div>
                    </div>
                    <div className="row-span-1 p-6 bg-theme-gray rounded-xl opacity-95 shadow-xl transition duration-700 transform hover:scale-105">
                        <h1 className="text-2xl uppercase font-bold">Beslenme</h1>
                        <div className="flex mt-8 gap-8">
                            <span className="text-6xl font-bold m-auto">%32</span>
                            <span>Bu alanda 20 yılı aşkın danışmanlık deneyimine sahibiz ve şunlara ulaşmak için çabalıyoruz: gelişmek, güçlenmek, imkan tanımak ve sürdürmek.</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
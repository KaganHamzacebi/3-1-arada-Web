import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import MobileLogin from "../../assets/mobile_login.png";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SlideMenu() {

    const items = [1, 2];

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
            {
                items.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className="flex">
                            <div className="grid grid-cols-1 md:grid-cols-3 opacity-95 py-6 rounded-xl">
                                <div className="col-span-1">
                                    <img src={MobileLogin} alt="mobile_login" className="ml-4 m-auto h-128"/>
                                </div>
                                <div className="m-auto col-span-2 px-24 flex flex-col gap-y-4">
                                    <span className="font-bold text-3xl text-white">Header</span>
                                    <span className="text-xl text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
}
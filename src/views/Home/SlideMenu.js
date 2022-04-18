import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SlideTemplate1 from "./SlideTemplates/SlideTemplate1";
import SlideTemplate2 from "./SlideTemplates/SlideTemplate2";
import SlideTemplate3 from "./SlideTemplates/SlideTemplate3";

//TemplateImages
import Achievements from "../../assets/sliderImages/achievements.png";
import ChatScreen from "../../assets/sliderImages/chatScreen.png";
import ChatStart from "../../assets/sliderImages/chatStart.png";
import Login from "../../assets/sliderImages/login.png";
import MainMenu from "../../assets/sliderImages/mainMenu.png";
import Meditation from "../../assets/sliderImages/meditation.png";
import Meditation2 from "../../assets/sliderImages/meditation2.png";
import ToDo from "../../assets/sliderImages/todo.png";
import ToDo2 from "../../assets/sliderImages/todo2.png";
import Sleep from "../../assets/sliderImages/sleep.png";
import Sleep2 from "../../assets/sliderImages/sleep2.png";
import SlideTemplate4 from "./SlideTemplates/SlideTemplate4";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SlideMenu() {

    const items = [
        {
            template: 1,
            header: "Easy Login & Easy Use",
            body: "Easily register and login to start using the 3 in 1. Just enter your name, surname, email, password, gender and birthdate. Use your email address and password to login. If you forget your password you can easily recover and reset with a single click.",
            img: Login,
            alt: "slider_login"
        },
        {
            template: 3,
            header: "Three Modules in a single application",
            body: "We offer your three application in a single one! Sleep, Chat and Meditation. Before sleep just start the sleep module and track your sleep quality. Use chat module to interact with people anonymously. You can even meditate with VR glasses.",
            img: MainMenu,
            alt: "slider_menu",
        },
        {
            template: 2,
            header: "Better Sleep Quality Better Life",
            body: "We know that the key of better life is better sleep. Let us just track and improve your sleep quality. We will share best and worst periods on your sleep and your weekly sleep schedule data. All you need is check the data an fix your sleep schedule.",
            img1: Sleep,
            alt1: "slider_sleep",
            img2: Sleep2,
            alt2: "slider_sleep2",
        },
        {
            template: 4,
            header: "Next Level VR Meditation",
            body: "You can even meditate in this application with VR glasses. You can select the environment that you love to meditate with just a single click. Unlimited experience with relaxing sounds.",
            img1: Meditation,
            alt1: "slider_meditation",
            img2: Meditation2,
            alt2: "slider_meditation2",
        },
        {
            template: 2,
            header: "Chat Anonymously",
            body: "Get into chat with single click and match with random people and talk whatever you like. We keep an eye on the chat module to ensure a great chatting experience. You can report your chat buddy if you have any trouble and we will preserve the piece environment",
            img1: ChatStart,
            alt1: "slider_chat_start",
            img2: ChatScreen,
            alt2: "slider_chat_screen"
        },
        {
            template: 3,
            header: "Achievement system to feel progress!",
            body: "We have an achievement system to track your progress in our modules and you can feel your progress by time. Even on three modules you can track your usage duration and many more things!",
            img: Achievements,
            alt: "slider_achievements",
        },
        {
            template: 2,
            header: "TO-DO helper for daily stuff",
            body: "There is also a TO-DO helper mini-application to handle your daily stuff. It has simple user interface and single click create and remove functions. Just list your daily to-do things and complete one by one.",
            img1: ToDo,
            alt1: "slider_todo",
            img2: ToDo2,
            alt2: "slider_todo2",
        }];

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
            {
                items.map((item, index) => {
                    return <SwiperSlide key={index} className="w-full h-full">
                        {
                            item.template === 1 ?
                                <SlideTemplate1 header={item.header} body={item.body} img={item.img} alt={item.alt}/>
                                :
                                item.template === 2 ?
                                    <SlideTemplate2 header={item.header} body={item.body}
                                                    img1={item.img1} alt1={item.alt1}
                                                    img2={item.img2} alt2={item.alt2}/>
                                    :
                                    item.template === 3 ?
                                        <SlideTemplate3 header={item.header} body={item.body} img={item.img}
                                                        alt={item.alt}/>
                                        :
                                        <SlideTemplate4 header={item.header} body={item.body}
                                                        img1={item.img1} alt1={item.alt1}
                                                        img2={item.img2} alt2={item.alt2}/>
                        }
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
}
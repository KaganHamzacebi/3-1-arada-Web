import {NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/images/logo_white.png";
import {useContext, useEffect, useState} from "react";
import TextAnimation from "../common/TextAnimation";
import {useCookies} from 'react-cookie';
import {LogoutIcon, MenuIcon, UserCircleIcon} from "@heroicons/react/solid";
import "./Header.css";
import {UserContext} from "../App";


export default function Header(props) {
    const {user, setUser} = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentComponent, setCurrentComponent] = useState(props.currentComponent);

    useEffect(() => {
        console.log(props.currentComponent);
        setCurrentComponent(props.currentComponent);

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, [])

    const navFunc = (name) => {
        let url = "/" + name;
        navigate(url);
    }

    const signOut = () => {
        removeCookie("userToken", {path: '/'});
        navigate("/");
        window.location.reload();
    }

    return (
        <div className={`fixed w-full transform transition duration-500 ${scroll && "bg-gray-600 bg-opacity-80"} z-50`}>
            <div className="flex px-4 md:px-16">
                <img src={Logo} onClick={() => navigate("/")} className="w-28 h-28 select-none cursor-pointer" />
                <div className="my-auto ml-4 select-none hidden sm:block" onClick={() => navigate("/")}>
                    <TextAnimation componentId="appName" text="3 in 1" fontSize={40} fontWeight="bold"/>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-x-8">
                    <NavLink to="/sleep"
                             className={`${currentComponent === 1 ? "bg-gray-300 bg-opacity-70" : "hover:bg-theme-darkbrown hover:text-white"} text-2xl hidden md:block m-auto font-semibold p-2 rounded-lg transition duration-300`}>
                        <TextAnimation componentId="sleeptext" text="Sleep" fontSize={20} />
                    </NavLink>
                    <NavLink to="/chat"
                             className={`${currentComponent === 2 ? "bg-gray-300 bg-opacity-70" : "hover:bg-theme-darkbrown hover:text-white"} text-2xl hidden md:block m-auto font-semibold p-2 rounded-lg transition duration-300`}>
                        <TextAnimation componentId="chattext" text="Chat" fontSize={20}/>
                    </NavLink>
                    <NavLink to="/meditation"
                             className={`${currentComponent === 3 ? "bg-gray-300 bg-opacity-70" : "hover:bg-theme-darkbrown hover:text-white"} text-2xl hidden md:block m-auto font-semibold p-2 rounded-lg transition duration-300`}>
                        <TextAnimation componentId="meditationtext" text="Meditation" fontSize={20}/>
                    </NavLink>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-x-8 my-auto">
                    {
                        user ?
                            <div className="hidden lg:flex px-2 md:px-18">
                                <div className="container hidden md:block">
                                    <button id="dropdownButton" data-dropdown-toggle="dropdown"
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                            }}
                                            onBlur={() => {
                                                setIsOpen(!isOpen)
                                            }}
                                            className="text-white text-2xl  align-items-center rounded-lg hover:bg-theme-brown  md:block m-auto font-semibold px-4 py-2.5 text-center inline-flex items-center"
                                            type="button">
                                        {user.name}
                                        {/*<ChevronDownIcon className=" absolute h-3 w-3"/>*/}
                                        <div hidden={!isOpen}
                                             className="dropdown z-50 w-44 mt-1 ml-1 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                            <ul className="py-1" aria-labelledby="dropdownButton">
                                                <li id="profile" onClick={event => navFunc("profile")}
                                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                    Profile
                                                </li>
                                                <li onClick={event => navFunc("to-do")}
                                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                    To-Do List
                                                </li>
                                                <li onClick={event => signOut()}
                                                    className="relative block py-2 px-4 text-sm justify-content-sm-between items-center text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                    <a className="align-items-center text-red-600">Logout
                                                        <LogoutIcon
                                                            className="absolute text-red-600 h-4 w-4 left-2 bottom-1/2 transform translate-y-1/2"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex-grow"></div>
                                <div className="flex gap-x-4 my-auto">
                                    {
                                        user && user.profilePicture ?
                                            <img
                                                src={`data:image/jpeg;base64,${user.profilePicture}`}
                                                className="rounded-circle w-12 rounded-full"
                                                alt="avatar image"
                                            />
                                            :
                                            <UserCircleIcon
                                                className="m-auto text-gray-300 w-12 h-12 border-2 border-gray-300 shadow-2xl rounded-circle relative"
                                            />
                                    }

                                </div>
                            </div>
                            :
                            <NavLink to="/login"
                                     className="text-2xl hidden md:block m-auto font-semibold text-white p-2 px-4 rounded-lg bg-theme-blue hover:bg-opacity-90 shadow-xl">
                                <TextAnimation componentId="logintext" text="Login" fontSize={25}/>
                            </NavLink>
                    }
                </div>

                <div className="block md:hidden flex my-auto p-1 border-2 rounded-xl cursor-pointer">
                    <MenuIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-8 h-8 text-white"/>
                </div>
                {/* Mobile Header */}
                <div
                    className={`${isMobileMenuOpen ? "block" : "hidden"}   md:hidden absolute p-4 top-20 left-0 w-full`}>
                    <div className="">
                        {
                            user &&
                            <div className="bg-theme-green rounded-xl flex flex-col p-1 bg-opacity-90">
                                <NavLink to="/sleep"
                                         className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800">
                                    Sleep
                                </NavLink>
                                <NavLink to="/chat"
                                         className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800">
                                    Chat
                                </NavLink>
                                <NavLink to="/meditation"
                                         className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800">
                                    Meditation
                                </NavLink>
                                <NavLink to="/profile"
                                         className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800">
                                    Profile
                                </NavLink>
                                <NavLink to="/to-do"
                                         className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800">
                                    To-Do List
                                </NavLink>
                                <div
                                    className="text-xl bg-red-600 my-auto font-semibold text-white p-2 rounded-lg transition duration-300"
                                    onClick={() => signOut()}
                                >
                                    <span>Logout</span>
                                </div>
                            </div>
                        }
                        {
                            !user &&
                            <div className="bg-theme-green rounded-xl flex flex-col p-1 bg-opacity-90">
                                <NavLink to="/login"
                                         className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800">
                                    Login
                                </NavLink>
                                <NavLink to="/register"
                                         className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800">
                                    Register
                                </NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
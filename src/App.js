import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createContext, useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';

//Views
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Login from "./views/Login/Login";
import RegisterAndForgotPassword from "./views/RegisterAndForgotPassword/RegisterAndForgotPassword";
import Chat from "./views/Chat/Chat";
import ChatRoom from "./views/Chat/ChatRoom";
import Loading from "./views/Loading/Loading";
import MyComponent from "./views/Sleep/MyComponent";

import ProfileService from "./service/ProfileService";
import Meditation from "./views/Meditation/Meditation";

export const UserContext = createContext(null);

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    const [user, setUser] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const profileService = new ProfileService();

    useEffect(() => {
        async function fetchData() {
            if (userToken) {
                try {
                    const userData = await profileService.getUser(userToken);
                    setUser(userData.data);
                    setLoaded(true);
                } catch (e) {
                    removeCookie('userToken');
                    setLoaded(true);
                }
            } else {
                setLoaded(true);
            }
        }

        fetchData();

    }, [userToken])

    return (
        <UserContext.Provider value={{user, userToken, setUserToken}}>
            {loaded ?
                <div id="appWrapper" className="w-full h-full flex flex-col flex-grow">
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<RegisterAndForgotPassword/>}/>
                            {/*<Route path="/profile" element={<Profile/>}/>*/}
                            <Route path="/chat" element={<Chat/>}/>
                            <Route path="/chat/room=:id" element={<ChatRoom/>}/>
                            <Route path="*" element={<NotFound/>}/>
                            <Route path="/sleep" element={<MyComponent/>}/>
                            <Route path="/meditation" element={<Meditation/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
                :
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Loading/>}/>
                    </Routes>
                </BrowserRouter>
            }
        </UserContext.Provider>
    );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createContext, useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';

//Views
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Chat from "./views/Chat/Chat";
import Profile from "./views/Profile/Profile";
import ChatRoom from "./views/Chat/ChatRoom";
import Loading from "./views/Loading/Loading";
import NotFound from "./views/NotFound/NotFound";
import MyComponent from "./views/Sleep/MyComponent";
import ClusterQuestion from "./views/ClusterQuestions/ClusterQuestion";
import UpdateQuestions from "./views/ClusterQuestions/UpdateQuestions";
import RegisterAndForgotPassword from "./views/RegisterAndForgotPassword/RegisterAndForgotPassword";

import ProfileService from "./service/ProfileService";
import ResetPassword from "./views/RegisterAndForgotPassword/ResetPassword/ResetPassword";
import ResetSuccess from "./views/ResetPasswordResults/ResetSuccess";
import ResetFailed from "./views/ResetPasswordResults/ResetFailed";
import TokenExpired from "./views/ResetPasswordResults/TokenExpired";
import ToDo from "./views/ToDo/ToDo";
import Popup from "reactjs-popup";

export const UserContext = createContext(null);
export const QuestionModalContext = createContext(null);

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    const [user, setUser] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const profileService = new ProfileService();

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const contentStyle = {width: "fit-content", borderRadius: "16px"};

    const QuestionsModal = () =>
        <Popup
            open={open}
            onClose={closeModal}
            closeOnDocumentClick={false}
            {...{contentStyle}}
        >
            <QuestionModalContext.Provider value={{setOpen}}>
                <ClusterQuestion/>
            </QuestionModalContext.Provider>
        </Popup>

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

        if (userToken) {
            profileService.isFormCompleted(userToken)
                .then((res) => {
                    if (!res.data.formCompleted) {
                        setOpen(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }


    }, [userToken])

    return (
        <UserContext.Provider value={{user, userToken, setUserToken}}>
            <QuestionsModal/>
            {loaded ?
                <div id="appWrapper" className="w-full h-full flex flex-col flex-grow">
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<RegisterAndForgotPassword/>}/>
                            <Route path="/resetPassword/token=:token&email=:email" element={<ResetPassword/>}/>
                            <Route path="/resetSuccess" element={<ResetSuccess/>}/>
                            <Route path="/resetFailed" element={<ResetFailed/>}/>
                            <Route path="/tokenExpired" element={<TokenExpired/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/chat" element={<Chat/>}/>
                            <Route path="/chat/room=:id" element={<ChatRoom/>}/>
                            <Route path="*" element={<NotFound/>}/>
                            <Route path="/clustering" element={<ClusterQuestion/>}/>
                            <Route path="/updateQuestions" element={<UpdateQuestions/>}/>
                            <Route path="/sleep" element={<MyComponent/>}/>
                            <Route path="/to-do" element={<ToDo/>}/>
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

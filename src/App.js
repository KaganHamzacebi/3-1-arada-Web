import {BrowserRouter, Route, Routes} from "react-router-dom";

//Views
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Login from "./views/Login/Login";
import RegisterAndForgotPassword from "./views/RegisterAndForgotPassword/RegisterAndForgotPassword";
import Chat from "./views/Chat/Chat";
import ChatRoom from "./views/Chat/ChatRoom";
import MyComponent from "./views/Sleep/MyComponent";
import CalendarFunc from "./views/Sleep/CalendarFunc";

function App() {
  return (
      <div id="appWrapper" className="flex flex-col flex-grow">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<RegisterAndForgotPassword />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/chat/room=:id" element={<ChatRoom />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/sleep" element={<Home/>}/>
                  <Route path="/deneme" element={<MyComponent/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

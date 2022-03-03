import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Views
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Login from "./views/Login/Login";
import RegisterAndForgotPassword from "./views/RegisterAndForgotPassword/RegisterAndForgotPassword";
import Chat from "./views/Chat/Chat";
import Sleep from "./views/Sleep/Sleep";
import ChatRoom from "./views/Chat/ChatRoom";

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
                  <Route path="/sleep" element={<Sleep/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

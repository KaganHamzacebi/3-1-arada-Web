import './App.css';
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

function App() {
  return (
      <div id="appWrapper" className="flex flex-col flex-grow">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<RegisterAndForgotPassword />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

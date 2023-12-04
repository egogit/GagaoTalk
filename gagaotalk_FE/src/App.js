import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import InitPage from "./component/page/InitPage";
import ProcessPage from "./component/page/ProcessPage";
import MainPage from "./component/page/MainPage";
import LoginPage from "./component/page/LoginPage";
import ChatViewPage from "./component/page/ChatViewPage";
import {UserProvider} from "./component/messenger/UserContext";

function App() {
  return (
      <UserProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<InitPage/>}/>
                  <Route path="/process" element={<ProcessPage/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/main" element={<MainPage/>}/>
                  <Route path="/chat/:chatId" element={<ChatViewPage/>}/>
              </Routes>
          </BrowserRouter>
      </UserProvider>
  );
}

export default App;

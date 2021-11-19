import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import ChatRoom from './ChatRoom/ChatRoom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login/>}>
          </Route>
          <Route exact path="/chat-room" element={<ChatRoom/>}>
          </Route>
          <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

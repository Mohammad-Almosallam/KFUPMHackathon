import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./views/Search.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

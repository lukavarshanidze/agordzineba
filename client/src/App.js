import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import bg from './assets/bg.jpeg'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Agordzineba from "./pages/Agordzineba";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import AdminLogin from "./pages/Admin";
import Mtavari from "./pages/Mtavari";
import ExactPost from "./pages/ExactPost";
import Bg from "./pages/Bg";



function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  return (
    <div>
      {!isRootPath && <Header />}
      <Routes>
        <Route path="/revival-of-the-nation" element={<Agordzineba />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/news" element={<Home />} />
        <Route path="/" element={<Bg />} />
        <Route path="/home" element={<Mtavari />} />
        <Route path="/post-review/:id" element={<ExactPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
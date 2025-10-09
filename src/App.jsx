import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Gallery from "./Components/GalleryPage/Gallery.jsx";
import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Information from "./Components/InformationPage/Information.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/information" element={<Information/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

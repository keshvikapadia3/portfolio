import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header name="Keshvi Kapadia" />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer email="keshvivishal@gmail.com" />
    </>
  );
}

export default App;
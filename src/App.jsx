import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import WorkComp from "./components/Work/WorkComp.jsx";
import Footer from "./components/Footer/Footer";
import DarkMode from "./components/Navbar/DarkMode"; // Assuming DarkMode is used for theme switching
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Career from './pages/Career';
import Contact from "./pages/Contact";


const App = () => {
  // State to manage theme (light or dark)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  // Access the root HTML element for theme-related classes
  const element = document.documentElement;

  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });

    // Apply the theme to the document based on state
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }

    // Refresh AOS to apply animations properly
    AOS.refresh();
  }, [theme]); // Effect runs whenever theme changes

  return (
    <div className={`bg-white dark:bg-black dark:text-white text-black overflow-x-hidden`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
         <Route path='/' element={<Home theme={theme}/>} />
         <Route path='/services' element={<Service/>} />
         <Route path='/career' element={<Career/>} />
         <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;



 {/* <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <BrandsLogo theme={theme}/>
      <Services />
      <Testimonial />
      <WorkComp />
      <Footer /> */}
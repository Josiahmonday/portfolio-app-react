import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";



function App() {
  const [isDaylightMode, setIsDaylightMode] = useState(false);

  const toggleDaylightMode = () => {
    setIsDaylightMode(!isDaylightMode);
  };
  return (
    <div className={`min-h-screen ${isDaylightMode ? 'bg-white text-black' : 'bg-[#0a192f] text-gray-300'}`}>
      <Navbar toggleDaylightMode={toggleDaylightMode} isDaylightMode={isDaylightMode} />
      <Home isDaylightMode={isDaylightMode} />
      <About isDaylightMode={isDaylightMode} />
      <Skills isDaylightMode={isDaylightMode} />
      <Work isDaylightMode={isDaylightMode} />
      <Contact isDaylightMode={isDaylightMode} />
    </div>
  );
}

export default App;

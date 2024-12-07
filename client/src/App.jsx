import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
// import Events from "./pages/Events";
// import Workshops from "./pages/Workshops";
// import ContactUs from "./pages/ContactUs";
import "./styles/globals.css";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Home />
      <About />
      {/* <Events />
      <Workshops />
      <ContactUs /> */}
    </div>
  );
};

export default App;

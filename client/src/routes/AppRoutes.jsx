import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Events from "../pages/Events";
import Workshops from "../pages/Workshops";
// Import other pages if necessary

const AppRoutes = () => (
  <Router>
    {/* Navbar placed here will be rendered on all pages */}
    <Navbar />

    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/workshops" element={<Workshops />} />
      </Route>
      {/* Define other routes as needed */}
      {/* 
      <
      <Route path="/contact-us" element={<ContactUs />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
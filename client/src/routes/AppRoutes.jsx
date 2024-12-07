import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
// Import other pages if necessary

const AppRoutes = () => (
  <Router>
    {/* Navbar placed here will be rendered on all pages */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Define other routes as needed */}
      {/* <Route path="/events" element={<Events />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/contact-us" element={<ContactUs />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
// import Events from "../pages/Events";
// import Workshops from "../pages/Workshops";
// import ContactUs from "../pages/ContactUs";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/about" element={<About />} />
      {/* <Route path="/events" element={<Events />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/contact-us" element={<ContactUs />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;

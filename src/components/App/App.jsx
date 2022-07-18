import { Route, Routes } from "react-router-dom";
import Contact from "../../mainPages/Contact";
import Courses from "../../mainPages/Courses";
import Events from "../../mainPages/Events";
import Home from "../../mainPages/Home";
import Pages from "../../mainPages/Pages";
import Footer from "../Footer";
import Navbar from "../Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

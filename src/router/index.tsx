import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../component/navbar";
import Home from "../pages/home/index";
import Read from "../pages/read";
import Learn from "../pages/learn";
import Watch from "../pages/watch";
import Quiz from "../pages/quiz";
import Footer from "../component/footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

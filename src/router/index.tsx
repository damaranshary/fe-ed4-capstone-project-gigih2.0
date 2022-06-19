import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../component/navbar";
import Home from "../pages/home";
import Read from "../pages/read";
import Learn from "../pages/learn";
import Watch from "../pages/watch";
import Quiz from "../pages/quiz";

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
    </Router>
  );
};

export default AppRouter;

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "../component/navbar";
import Home from "../pages/home";
import Quiz from "../pages/quiz";
import Video from "../pages/video";
import Books from "../pages/books";
import Vocab from "../pages/vocab";


const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/video" element={<Video />} />
                <Route path="/vocab" element={<Vocab/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;
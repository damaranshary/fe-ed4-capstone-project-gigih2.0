import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "../component/navbar";
import Home from "../pages/home";
import Quiz from "../pages/quiz";
import Watch from "../pages/watch";
import Read from "../pages/read";
import Learn from "../pages/learn";
import Legends from "../component/legends";
import FunFact from "../component/funFact"
import BookDescription from "../component/books/description";


const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="read">
                        <Route index element={<Read />} />
                        <Route path="legends">
                            <Route index element={<Legends />} />
                            <Route path=":id">
                                <Route index element={<BookDescription />} />
                                <Route path=":pages" element={<Legends />}/>
                            </Route>

                        </Route>

                        <Route path="fun-fact" element={<FunFact />} />
                    </Route>
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="watch" element={<Watch />} />
                    <Route path="learn" element={<Learn />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../component/navbar";
import Home from "../pages/home/index";
import Read from "../pages/read";
import Learn from "../pages/learn";
import Quiz from "../pages/quiz";
import Watch from "../pages/watch";
import AdventureBooks from "../component/adventure";
import NatureBooks from "../component/nature"
import Vocab from '../component/mainVocab';
import VocabContent from "../component/vocabItems/content";
import BookContent from "../component/books/content";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="read">
                        <Route index element={<Read />} />
                        <Route path="adventure">
                            <Route index element={<AdventureBooks />} />
                            <Route path=":id" element={<BookContent />} />
                        </Route>
                        <Route path="nature">
                            <Route index element={<NatureBooks />} />
                            <Route path=":id" element={<BookContent />} />
                        </Route>
                    </Route>
                    <Route path="learn">
                        <Route index element={<Vocab />} />
                        <Route path="vocabs">
                            <Route index element={<Vocab />} />
                            <Route path=":id" element={<VocabContent />} />
                        </Route>
                        <Route path="vocabs" element={<NatureBooks />} />
                    </Route>
                    <Route path="watch" element={<Watch />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="*" element={<div>nothing here code:404</div>}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;

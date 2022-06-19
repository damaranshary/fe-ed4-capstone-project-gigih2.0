import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>This is Navbar</h1>
            <nav>
                <Link to="/">Beranda</Link>
                <Link to="/books">Buku</Link>
                <Link to="/video">Video</Link>
                <Link to="/quiz">Quiz</Link>
                <Link to="/vocab">Vocabulary</Link>
            </nav>
        </div>
    )
}

export default Navbar;
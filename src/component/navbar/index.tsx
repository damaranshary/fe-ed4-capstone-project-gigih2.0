import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <Box>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              Baca Merdeka
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-links">
                  Read
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/learn" className="nav-links">
                  Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/watch" className="nav-links">
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/quiz" className="nav-links">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Navbar;

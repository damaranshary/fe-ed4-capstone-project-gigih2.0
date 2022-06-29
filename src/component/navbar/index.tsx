import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Box>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Baca Merdeka
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-links" onClick={closeMobileMenu}>
                  Read
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
                  Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/watch" className="nav-links" onClick={closeMobileMenu}>
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/quiz" className="nav-links" onClick={closeMobileMenu}>
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

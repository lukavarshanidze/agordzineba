import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


function Header() {
  
  const handleClick = (path) => {
    setActiveItem(path);
  };
  
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  return (
    <div>
      <div className={styles.main__header}>
        <h1>ეროვნულ-სოციალისტური საქართველოს მშრომელთა პარტია</h1>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li className={activeItem === "/home" ? styles.clicked : ""}>
            <Link to="/home" onClick={() => handleClick("/home")}>
              მთავარი
            </Link>
          </li>
          <li className={activeItem === "/news" ? styles.clicked : ""}>
            <Link to="/news" onClick={() => handleClick("/news")}>
              სიახლეები
            </Link>
          </li>
          <li
            className={activeItem === "/revival-of-the-nation" ? styles.clicked : ""}
          >
            <Link
              to="/revival-of-the-nation"
              onClick={() => handleClick("/revival-of-the-nation")}
            >
              ერის აღორძინება
            </Link>
          </li>
          <li className={activeItem === "/about" ? styles.clicked : ""}>
            <Link
              to="/about"
              onClick={() => handleClick("/about")}
            >
              ჩვენ შესახებ
            </Link>
          </li>
          <li className={activeItem === "/contact" ? styles.clicked : ""}>
            <Link to="/contact" onClick={() => handleClick("/contact")}>
              კონტაქტი
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

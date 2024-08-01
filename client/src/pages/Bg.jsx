import { Link } from "react-router-dom";
import backgroundImage from "../assets/bg.jpeg";
import styles from "../styles/Bg.module.scss";

const Bg = () => {
  return (
    <div className={styles.container}>
      <Link to={'/home'}>
        <img src={backgroundImage} />
      </Link>
    </div>
  );
};

export default Bg;

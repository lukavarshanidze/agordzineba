import styles from "./footer.module.scss";
import logo from "../../assets/logo.jpeg";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import facebook from "../../assets/logos/facebook.png";
import instagram from "../../assets/logos/instagram.png";
import telegram from "../../assets/logos/telegram.png";
import youtube from "../../assets/logos/youtube.png";
import tiktok from "../../assets/logos/tiktok.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <img src={logo} />
        </li>
        <li>
          <img src={logo2} />
        </li>

        <li className={styles.soc_logos}>
          <p>ეროვნულ-სოციალისტური საქართველოს მშრომელთა პარტია</p>
          <div>
            <a href="https://www.facebook.com/NSGWP.Party" target="_blank">
              <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/nsgwp.party" target="_blank">
              <img src={instagram} />
            </a>
            <a href="https://www.youtube.com/@NSGWP.Party14" target="_blank">
              <img src={youtube} />
            </a>

            <a href="https://t.me/NSGWPparty" target="_blank">
              <img src={telegram} />
            </a>
            <a href="https://www.tiktok.com/@nsgwparty" target="_blank">
              <img src={tiktok} />
            </a>
          </div>
        </li>
        <li>
          <img src={logo1} />
        </li>
        <li>
          <img src={logo3} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;

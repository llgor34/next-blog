import classes from '../../styles/home.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Socialsmedia = ({ black }) => {
  return (
    <ul className={classes.icons}>
      <li>
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: black ? 'black' : '' }}
        >
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          href="http://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: black ? 'black' : '' }}
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="http://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: black ? 'black' : '' }}
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: black ? 'black' : '' }}
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default Socialsmedia;

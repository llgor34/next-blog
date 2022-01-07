import classes from './Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={classes.nav}>
      <div className={classes['about-me']} onClick={() => router.push('/')}>
        <h2>Igor Manoryk</h2>
        <p>Web developer</p>
      </div>
      <div className={classes.links}>
        <ul>
          <li>Newsletter</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

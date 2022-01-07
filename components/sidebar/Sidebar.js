import Socialsmedia from '../socialsmedia/Socialsmedia';
import classes from '../../styles/blog.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import Form from './Form';

const Sidebar = () => {
  return (
    <sidebar className={classes.sidebar}>
      <BsFillPersonFill />
      <h3>Hi, I&apos;m Jeff Sherman</h3>
      <p className={classes.openingTag}>
        I&apos;m a paragraph. Click here to add your own text and edit me. Let
        your users get to know you.
      </p>
      <Socialsmedia black={true} />
      <h3>Creativity. Productivity. Vision.</h3>
      <p>
        I&apos;m a paragraph. Click here to add your own text and edit me.
        I&apos;m a great place for you to tell a story and let your users know a
        little more about you.
      </p>
      <Form />
    </sidebar>
  );
};

export default Sidebar;

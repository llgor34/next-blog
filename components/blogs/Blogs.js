import classes from './blogs.module.css';
import Blog from './Blog';

const Blogs = ({ items }) => {
  return (
    <section className={classes.blogs}>
      {items.map((blog) => (
        <Blog key={blog.id} item={blog} />
      ))}
    </section>
  );
};

export default Blogs;

import classes from '../../styles/blog.module.css';
import Socialsmedia from '../../components/socialsmedia/Socialsmedia';
import Sidebar from '../../components/sidebar/Sidebar';
import { getFirestoreData } from '../../firebase/getFirestoreData';

const SingleBlog = ({ blog: blogjson }) => {
  const blog = JSON.parse(blogjson);

  return (
    <>
      <div className={classes.blogContainer}>
        <article>
          <header>{blog.title}</header>
          <div className={classes.description}>
            <p className={classes.enterText}>{blog.description}</p>
            <img src={blog.photoURL} alt="image" />
          </div>
          <div className={classes.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            facilis veritatis impedit ullam illo quaerat repellat amet minima
            quo voluptates. Nemo facilis rem asperiores voluptatum, non
            inventore ex harum eveniet.
          </div>
          <footer className={classes.firstFooter}>
            <Socialsmedia black={true} />
            {blog.category}
          </footer>
        </article>

        <Sidebar />
      </div>
    </>
  );
};

export default SingleBlog;

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const blog = await getFirestoreData('blogs', id);

  return {
    props: {
      blog: JSON.stringify(blog),
    },
  };
};

export const getStaticPaths = async () => {
  const blogs = await getFirestoreData('blogs');
  const staticPaths = blogs.map((blog) => ({
    params: {
      id: blog.id,
    },
  }));

  return {
    paths: staticPaths,
    fallback: false,
  };
};

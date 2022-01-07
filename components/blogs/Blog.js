import classes from './blogs.module.css';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';

const Blog = (props) => {
  const { item } = props;
  const { photoURL, title, description, date, id } = item;
  const router = useRouter();

  return (
    <article className={classes.blog}>
      <img src={photoURL} alt="PHOTO" />
      <h5>{formatDistanceToNow(new Date(date), { addSuffix: true })}</h5>
      <header>{title}</header>
      <p>
        {description.length > 132
          ? `${description.substring(0, 132)}...`
          : `${description}...`}
      </p>
      <button onClick={() => router.push(`/blog/${id}`)}>
        Continue reading...
      </button>
    </article>
  );
};

export default Blog;

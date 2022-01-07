import classes from '../styles/home.module.css';
import Blogs from '../components/blogs/Blogs';
import Footer from '../components/footer/Footer';
import Socialsmedia from '../components/socialsmedia/Socialsmedia';
import { getFirestoreData } from '../firebase/getFirestoreData';
import { useState } from 'react';

const Home = ({ blogs: blogsJSON, categories: categoriesJSON }) => {
  const [filter, setFilter] = useState('all');
  const blogs = JSON.parse(blogsJSON).filter((blog) => {
    switch (filter) {
      case 'all':
        return blog;
      default:
        return blog.category === filter;
    }
  });
  const categories = JSON.parse(categoriesJSON);

  const filterBlogsBy = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <header className={classes.title}>
          <h2>Boost Your Success</h2>
          <p>Tips and tools for a productive mindset</p>
          <Socialsmedia />
        </header>
      </div>

      <main className={classes.blogsContainer}>
        <header>
          <ul>
            {categories &&
              categories.map((category) => (
                <li
                  key={category.id}
                  onClick={() => filterBlogsBy(category.value)}
                >
                  {category.label}
                </li>
              ))}
          </ul>
          <button>Add new</button>
        </header>

        <Blogs items={blogs} />
      </main>

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const blogs_array = await getFirestoreData('blogs');
  const categories_array = await getFirestoreData('categories');

  return {
    props: {
      blogs: JSON.stringify(blogs_array),
      categories: JSON.stringify(categories_array),
    },
    revalidate: 1,
  };
};

export default Home;

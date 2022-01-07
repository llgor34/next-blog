import Navbar from '../Navbar/Navbar';
import Head from 'next/head';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Igor Manoryk" />
        <meta
          name="description"
          content="Blog made using React, Next, firebase"
        />
        <meta name="keywords" content="blog, react.js, next.js, firebase" />

        <title>Blog</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

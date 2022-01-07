import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return <div>ERROR 404</div>;
};

export default NotFound;

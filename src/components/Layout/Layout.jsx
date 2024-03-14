import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../Nav/Nav';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
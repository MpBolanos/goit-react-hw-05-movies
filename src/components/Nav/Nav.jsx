import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Nav;
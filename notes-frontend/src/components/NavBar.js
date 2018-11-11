import React from 'react';
import Logo from './Logo';

const styles = {
  navBar: {
    backgroundColor: '#795fc8'
  },
  logo: {
    color: 'red',
    fontSize: '16px'
  }
};

const NavBar = () => {
  return (
    <div style={styles.navBar} className="nav-bar">
      <Logo style={styles.logo} />
      <ul>
        <li>My Notes</li>
        <li>Shared Notes</li>
      </ul>
    </div>
  );
};

export default NavBar;

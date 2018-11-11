import React from 'react';
import Logo from './Logo';
import Button from './Button';

const styles = {
  navBar: {
    backgroundColor: '#795fc8',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    fontFamily: 'Grand Hotel, cursive',
    fontSize: '50px',
    fontWeight: '400',
    marginLeft: '1%'
  },
  menuItems: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Arvo, serif',
    fontSize: '22px',
    marginLeft: '2%',
    justifyContent: 'space-between'
  },
  menuText: {
    width: 'auto',
    marginLeft: '25px'
  },
  name: {
    alignSelf: 'flexEnd',
    marginRight: '10px',
    marginLeft: '10px'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center'
  },
  searchText: {
    marginRight: '5px'
  },
  searchInput: {
    border: 'none',
    borderRadius: '8px',
    height: '20px',
    marginRight: '10px'
  },
  button: {
    borderRadius: '30px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#f2d242',
    fontFamily: 'Arvo, serif'
  },
  menuContentContainers: {
    display: 'flex',
    alignItems: 'center'
  }
};

const NavBar = () => {
  return (
    <div style={styles.navBar} className="nav-bar">
      <Logo style={styles.logo} />
      <div style={styles.menuItems}>
        <div style={styles.menuContentContainers}>
          <p style={styles.menuText}> my notes</p>
          <p style={styles.menuText}>shared notes</p>
        </div>
        <div style={styles.menuContentContainers}>
          <form style={styles.searchBar}>
            <input type="text" style={styles.searchInput} />
            <Button style={styles.button} text="search note" />
          </form>
          <p style={styles.menuText && styles.name}>Milos</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

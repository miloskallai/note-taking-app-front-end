import React from 'react';
import NavBar from './Components/NavBar';

const App = ({ children }) => {
  return (
    <div className='App'>
      <NavBar />
      {children}
    </div>
  );
};

export default App;

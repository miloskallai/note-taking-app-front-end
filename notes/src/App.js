import React from 'react';
import AppRouter from './routers/AppRouter';
import { startSetNoteData } from '../src/actions/index';
import store from './store';

store.dispatch(startSetNoteData());

const App = () => {
  return (
    <div className='App'>
      <AppRouter />
    </div>
  );
};

export default App;

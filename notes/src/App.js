import React from 'react';
import ShowNotes from './Components/ShowNotes';
import NoteViewer from './Components/NoteViewer';

const App = ({ children }) => {
  return (
    <div className='App'>
      <ShowNotes />
      <NoteViewer>{children}</NoteViewer>
    </div>
  );
};

export default App;

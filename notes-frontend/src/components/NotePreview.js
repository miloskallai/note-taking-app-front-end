import React from 'react';
import Button from '../components/Button';

const styles = {
  mainContainer: {
    borderRadius: '18px',
    border: '1px solid #795FC8',
    width: '50vw',
    height: '25vh',
    padding: '25px',
    marginBottom: '60px'
  },
  noteBody: {
    borderTop: '1px solid #795FC8',
    borderBottom: '1px solid #795FC8',
    padding: '15px 0px 15px 0px',
    lineHeight: '1.6'
  },
  noteTitle: {
    paddingBottom: '15px'
  },
  btnContainer: {
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  btnDelete: {
    backgroundColor: '#FF0969',
    fontFamily: 'Arvo, serif',
    color: 'white',
    fontSize: '16px',
    borderRadius: '24px',
    width: '80px',
    height: '35px',
    alignSelf: 'flex-end'
  },
  btnEdit: {
    fontFamily: 'Arvo, serif',
    backgroundColor: '#A7B2E3',
    color: 'white',
    fontSize: '16px',
    borderRadius: '24px',
    width: '80px',
    height: '35px'
  },
  btnView: {
    fontFamily: 'Arvo, serif',
    backgroundColor: '#795FC8',
    color: 'white',
    fontSize: '16px',
    borderRadius: '24px',
    width: '80px',
    height: '35px',
    marginRight: '10px'
  }
};

const NotePreview = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.noteTitle}>Note Title</h1>

      <div style={styles.noteBody} className="noteBody">
        Here’s the latest trailer for the Coen brothers’ Netflix film — an
        anthology of six different stories that was initially announced as a
        short TV series. The whole thing looks a touch low budget; but it also
        looks plenty goofy and Coen-y, and the fact that Netflix is putting this
        in theaters for a week before it’s streaming suggests the company has
        some real faith in it. The film hit some theaters November 8th, then
        goes online on the 16th...
      </div>

      <div style={styles.btnContainer} className="btnContainer">
        <div>
          <Button style={styles.btnView} text="view" />
          <Button style={styles.btnEdit} text="edit" />
        </div>
        <Button style={styles.btnDelete} text="delete" />
      </div>
    </div>
  );
};

export default NotePreview;

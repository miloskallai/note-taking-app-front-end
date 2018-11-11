import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    border: '1px solid #795FC8',
    borderRadius: '8px',
    marginTop: '50px',
    width: '60vw',
    height: '70vh',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column'
  },
  noteTitle: {
    paddingTop: '25px',
    paddingLeft: '25px'
  },
  btnDelete: {
    backgroundColor: '#FF0969',
    fontFamily: 'Arvo, serif',
    color: 'white',
    fontSize: '22px',
    borderRadius: '12px',
    width: '200px',
    height: '65px'
  },
  btnSave: {
    fontFamily: 'Arvo, serif',
    backgroundColor: '#A7B2E3',
    color: 'white',
    fontSize: '22px',
    borderRadius: '12px',
    width: '200px',
    height: '65px'
  },
  textArea: {
    borderRadius: '10px',
    margin: '25px',
    height: '50vh'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  BtnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: '25px',
    paddingBottom: '25px'
  }
};

const NewNote = () => {
  return (
    <div>
      <NavBar />
      <div style={styles.mainContainer}>
        <div style={styles.inputContainer}>
          <h1 style={styles.noteTitle}>Note Title</h1>
          <form style={styles.form}>
            <textarea style={styles.textArea} />
            <div style={styles.BtnContainer}>
              <Button style={styles.btnDelete} text="discard" />
              <Button style={styles.btnSave} text="save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewNote;

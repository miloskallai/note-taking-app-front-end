import React from 'react';
import Button from './Button';

const styles = {
  btnNew: {
    width: '250px',
    height: '100px',
    borderRadius: '20px',
    backgroundColor: '#EDAEFE',
    fontWeight: 'bold',
    fontFamily: 'Arvo, serif',
    fontSize: '25px',
    color: 'white'
  }
};

const CreateNewNote = props => {
  return <Button style={styles.btnNew} text={props.text} />;
};

export default CreateNewNote;

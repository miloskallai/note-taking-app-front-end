const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.note];
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.id);
    case 'EDIT_NOTE':
      return state.map(note => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.updates
          };
        } else {
          return note;
        }
      });
    case 'SET_NOTE_DATA':
      return action.notes;
    default:
      return state;
  }
};

export default notes;

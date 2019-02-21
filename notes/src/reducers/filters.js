const filters = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_NOTE':
      return {
        id: action.id,
        note_title: action.note_title,
        note_text: action.note_text,
        date: action.date
      };
    default:
      return state;
  }
};

export default filters;

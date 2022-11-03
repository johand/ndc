const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (!duplicateNotes.length) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const result = notes.filter(note => note.title !== title);

  if (notes.length > result.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(result);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};

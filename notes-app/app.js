const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => console.log('Adding a new note'),
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: () => console.log('Removing note'),
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => console.log('Listing out all notes'),
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('Reading a note'),
});

console.log(yargs.argv);

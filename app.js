const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// customize version for yargs
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.addNote(argv.title, argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title:{
        describe: 'note to be removed',
        demandOption: true,
        type: 'string'
        }
    },
    handler: (argv)=> {
        notes.removeNote(argv.title);
    }
})

// create a read command
yargs.command({
    command: "read",
    describe: "Reading Notes",
    builder: {
        title:{
        describe: 'note to be read',
        demandOption: true,
        type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

// creating a list command
yargs.command({
    command: 'list',
    describe: 'Listing Notes',
    handler: () => {
        notes.listNotes();
    }
})

// add, remove, read, list

yargs.parse();

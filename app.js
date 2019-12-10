const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//creat add command 
yargs.version('1.1.0')

//create add command 

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing the notes',
  handler: function () {
    console.log('Listing all the note!')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note!')
  }
})


//add, remove, read, list 
yargs.parse()

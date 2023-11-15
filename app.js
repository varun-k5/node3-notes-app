// const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')



//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
       title:{
        describe:'Note title',
        demandOption:'true',
        type:'string'
       },
       body:{
        describe:'Body',
        demandOption:'true',
        type:'string'
       }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }   
}).argv



//Creating remove command
yargs.command({
    command:'remove',
    describe:'Removing the note',
    builder:{
        title:{
        describe:'Note title',
        demandOption:'true',
        type:'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

}).argv



//Creating read command
yargs.command({
   command:'read',
   describe:'Reading the note',
   builder:{
    title:{
        describe:'Note Title',
        demandOption:'true',
        type:'string'
    },
   },
   handler(argv){
    notes.readnote(argv.title)
   }
}).argv



//Creating list command
yargs.command({
    command:'list',
    describe:'Listing the note',
    handler(){     
     notes.listNotes()
    }
 }).argv
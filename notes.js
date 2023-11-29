const chalk = require('chalk')
const fs=require('fs')


// const getNotes=()=>{
//    return 'your notes is...'
// }



//function to list notes
const listNotes=()=>{
   const notes=loadNotes();
   console.log(chalk.blue.inverse('Your Notes are'))
   notes.forEach((note) => {
      console.log(note.title)
   })
}


 //function to add notes
const addNote=(title,body)=>{
   const notes=loadNotes()
   const duplicateNote=notes.find((note)=> note.title===title )
   //debugger
   if (!duplicateNote) {
      notes.push({
         title:title,
         body:body
      })
      saveNotes(notes)
      console.log(chalk.green.inverse('New note added'))    
   }
   else{
      console.log('Note title already taken')
   }  
}



// const addNote=(title,body)=>{
//    const notes=loadNotes()
//    const duplicateNotes=notes.filter((note)=> note.title===title)
//    // const duplicateNotes=notes.filter(function(note){
//    //    return note.title===title
//    // })
//    if (duplicateNotes.length===0) {
//       notes.push({
//          title:title,
//          body:body
//       })
//       saveNotes(notes)
//       console.log(chalk.green.inverse('New note added'))    
//    }
//    else{
//       console.log('note title already taken')
//    }  
// }


//creating remove note function
const removeNote=function(title){
   const notes=loadNotes()
   const notestokeep=notes.filter((note)=>note.title!=title     )  
   // const notestokeep=notes.filter(function(note){    //unhi notes ko rakho jinka title delete wale se nhi milta 
   //    return note.title!=title    
   // }) 
   if(notes.length>notestokeep.length){
      console.log(chalk.green.inverse('Note removed!'))
      saveNotes(notestokeep)
   }
   else{
      console.log(chalk.red.inverse('no note found'))
   }
  
}


//universal function to save notes
const saveNotes=(notes)=>{
   const dataJSON=JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}


//universal function to load notes
const loadNotes=()=>{
   try{
    const dataBuffer=fs.readFileSync('notes.json')//data buffer is number
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
   }catch(e){
      return[]
   }  
}

//read note function
const readnote=(title)=>{
   const notes=loadNotes()
   const note=notes.find((note)=> note.title===title)
   if(note){
      console.log(note.body)
   }
}

//to export more than one
module.exports={
   addNote:addNote,
   removeNote:removeNote,
   listNotes:listNotes,
   readnote:readnote
}
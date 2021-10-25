//const http = require('http');

//Aca levantas el servidor y en la terminal para killearlo usas Ctrl+c
// const app = http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type': 'text/plain'})
//     response.end('Acabe de levantar el server :)');
// })

//Todo lo anterior lo realizas con express de esta forma
const express = require('express');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

//REST es la idea de crear APIS escalables
//API REST es la idea puesta en practica

let notes = [
    {
      id: 1,
      content: "repasar Node js",
      important: true
    },
    {
      id: 2,
      content: "preguntar Dni de mina",
      important: true
    },
    {
      id: 3,
      content: "ver anime",
      important: false
    }
  ]


app.get('/',(request,response)=>{ //Recibe 2 parametros: 1ero la ruta y 2do lo que hace
    response.send('<h1>Holis</h1>')
}) 

app.get('/api/notes',(request,response)=>{
    response.json(notes);
})

app.get('/api/notes/:id',(request,response)=>{
    const id = Number(request.params.id);
    const note = notes.find(note => note.id === id);

    if(note){
        response.send(note);
    }else{
        response.status(404).end();
    }
}) 

app.delete('/api/notes/:id',(request,response)=>{
    const id = Number(request.params.id);
    const note = notes.filter(note => note.id !==id);
    
    if(note){
        notes = note;
        response.status(200).end();
    }else{
        response.status(404).end();
    }
})

app.post('/api/notes',(request,response)=>{
    const note = request.body;
    
    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== undefined ? note.important : false
    }

    notes = notes.concat(newNote);
    response.json(newNote);
    response.status(200).end();
});


//El puerto 3000 y 3001 por lo general se encuentran vacios
const PORT= process.env.PORT || 3001
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
});

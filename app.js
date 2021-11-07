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
const routes = require('./controllers/notes');

app.use(express.json());
app.use(cors());
app.use('/api/notes',routes);

//REST es la idea de crear APIS escalables
//API REST es la idea puesta en practica



//El puerto 3000 y 3001 por lo general se encuentran vacios
const PORT= process.env.PORT || 3001
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
});

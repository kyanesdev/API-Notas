//Aca vamos a definir las propiedades como si fuera una clase , pero no trabajamos con clases

const {Schema, model} = require('mongoose');

const noteSchema = new Schema({ //Aca dentro del parentesis definimos el schema que le vamos a mandar. Es como si le pasasemos un objeto modelo
    "content": String, 
    "important": Boolean, 
    "date": Date
});

noteSchema.set("toJSON", { //Recibe 2 parametros, primero la propiedad que queremos y el segundo lo que vamos a hacer con esa propiedad
    transform: (document,returnedObject)=>{ //Devuelve 2 parametros, el primero es mismamente el documento y el segundo es el objeto que te devuelve ese documento
        returnedObject.id = returnedObject._id; //Aca guardaste la id que te devuelve la base de datos
        delete returnedObject._id; //No borras la id de la base de datos, solo la borras al momento de mostras, esto es algo visual y mejor funcionalidad para el cliente.
        delete returnedObject.__v;
    }
}) 

module.exports = model("note",noteSchema); //El model recibe 2 parametros, primero como se llama el schema y segundo el mismo schema
                                //Es importante que pases los parametros en singular porque mongoose se encarga de convertirlos a plural
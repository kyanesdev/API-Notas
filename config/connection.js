const mongoose = require('mongoose');

const connectionString = "mongodb+srv://kyanesdev_user:adminkele@cluster0.elwqd.mongodb.net/notesDB?retryWrites=true&w=majority"

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected database')
  }).catch(err => {
    console.log(err)
  })

  
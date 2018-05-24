const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');




mongoose.connect(keys.mongoURI, {UseMongoClient: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/routes')(app);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  const path = require('path');
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("appointment app server has started");
})
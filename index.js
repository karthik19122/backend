const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
mongoose.set('strictQuery', false);


const app = express();
const port = 4000;

mongoose.connect('mongodb+srv://karthiknaidu:4321@cluster0.juca7wd.mongodb.net/fiestadb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('open', () => console.log('Connected to DB'));
db.on('error', () => console.log('Error occurred'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './routers/welcome.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use('/', routes);

mongoose.connect('mongodb+srv://Genius:rwanda123@genius.hze2y.mongodb.net/Persons?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true },(err) =>{
    if(err) console.log(err);
    console.log("database is connected");
});

const port = process.env.PORT|| 3000;

app.listen(port, () =>
  console.log(`port is running at ${port}`||3000),
);

export default app; 
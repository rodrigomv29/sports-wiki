const express = require('express');
const indexRouter = require('./routes/index.js')

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use("/", indexRouter)




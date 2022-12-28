import express from 'express';
import dbConnect from './db/db.js';
import {mainRouter} from './routers/mainPageRouter.js'
const app = express();

dbConnect();
app.set('views','./views');
app.set('view engine', 'ejs');


app.use(express.static('./public'));

app.use(mainRouter);

app.listen(5000, ()=> {
    console.log('work');
});
import express from 'express';
import dbConnect from './db/db.js';
import { markerRouter } from './routers/markerRoutes.js';
import { restaurantRouter } from './routers/restaurantRouters.js';
import cors from 'cors';
const app = express();
let port = process.env.PORT || 3000;
dbConnect();
app.set('views','./views');
app.set('view engine', 'ejs');

app.use(cors())
app.use(express.json())
app.use(express.static('./public'));

app.use('/api', restaurantRouter);
app.use('/api', markerRouter);

app.listen(port, ()=> {
    console.log('work');
});

//import chalk from 'chalk';
const express = require ('express');
const { get } = require('http');
const debug = require ('debug')('app');
const morgan = require ('morgan');
const path = require ('path');

const PORT = process.env.PORT || 4000;
const app = express();
const sessionsRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set ('views', './src/views');
app.set ('view engine','ejs');

sessionsRouter.route('/')
    .get((req,res)=>{
        res.render ('sessions',{
sessions: [
    { title: 'Sessions 1', description: 'This is session 1' },
    { title: 'Sessions 2', description: 'This is session 2' },
    { title: 'Sessions 3', description: 'This is session 3' },
    { title: 'Sessions 4', description: 'This is session 4' },
]
      });
   });
sessionsRouter.route('/1')
    .get((req,res)=>{
        res.send ('Hola sesión unica');
    });

app.use('/Sessions', sessionsRouter);

app.get('/', (req, res) => {
    res.render('index', {title:'welcomw to BOOOOOOOCA', data: ['a', 'b', 'c']});
});

app.listen(PORT, ()=> {
    debug(`listening on port ${(PORT)}`);
});
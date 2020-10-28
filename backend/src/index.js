const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express()
require('./config')


//APP SERVER
const port = process.env.PORT
app.listen(port, ()=> {
    console.log('server connect on port ' + port);
})

//DB SERVER MONGODB
require('./db')

//MIDDELEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))


//ROUTERS
app.use('/' , require('./routers/productoRouter'))
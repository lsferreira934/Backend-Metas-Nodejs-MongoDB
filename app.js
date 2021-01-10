const express = require('express');
const Router = require('./src/routers/Router');
const cors = require('cors');

require('./src/config/connectionDb');
const app = express();

app.use(express.json());
app.use(Router);

//middleware de funcionamento do cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //defini quais sites prmitidos a se conectar
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE'); //defini verbos poderão ser usados
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  ); // libera a API a receber dados

  app.use(cors());
  next();
});
//

const port = 8080;
app.listen(port, () => {
  console.log(`Server started port:${port} link:http://localhost:${port}`);
});

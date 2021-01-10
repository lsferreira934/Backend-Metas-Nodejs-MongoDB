const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/tabela2021', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexão com banco de dados realizada com sucesso!');
  })
  .catch((err) => {
    console.log(`Erro: Conexão com banco de dados não realizada: ${err}`);
  });

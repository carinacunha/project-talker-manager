const express = require('express');
const bodyParser = require('body-parser');
const readFile = require('./readFile');
// const writeFile = require('./writeFile');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', async (req, res) => {
  const talkers = await readFile();
  if (talkers.length === 0) {
    return res.status(200).json([]);
  } 
    return res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
    const talkers = await readFile();
    const talker = talkers.find((elem) => elem.id === Number(id));
    if (talker) {
      return res.status(200).json([talker][0]);
    } 
      res.status(404).send({
        message: 'Pessoa palestrante não encontrada',
      });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

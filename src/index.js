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

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

const express = require('express');
const bodyParser = require('body-parser');
const readFile = require('./readFile');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');
const generateToken = require('./generateToken');
const tokenValidation = require('./middlewares/tokenValidation');
const nameValidation = require('./middlewares/nameValidation');
const ageValidation = require('./middlewares/ageValidation');
const talkValidation = require('./middlewares/talkValidation');
const watchedValidation = require('./middlewares/watchedValidation');
const rateValidation = require('./middlewares/rateValidation');
const writeFile = require('./writeFile');

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

app.post('/login', 
  emailValidation,
  passwordValidation,
  async (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

app.post('/talker',
tokenValidation,
nameValidation,
ageValidation,
talkValidation,
watchedValidation,
rateValidation,
async (req, res) => {
  const talkers = await readFile();
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const newPerson = {
    id: talkers.length + 1,
    name,
    age, 
    talk: {
      watchedAt,
      rate,
    },
  };

  talkers.push(newPerson);
  await writeFile(talkers);
  res.status(201).json(newPerson);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

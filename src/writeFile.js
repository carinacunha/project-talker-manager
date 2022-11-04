const fs = require('fs').promises;

const writeFile = async (newData) => {
  try {
    await fs.writeFile('src/talker.json', JSON.stringify(newData));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

module.exports = writeFile;
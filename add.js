const fs = require('fs');
const prompt = require('prompt-sync')();

const makeBlock = (block, indexFile) => {
  fs.writeFileSync(`./src/pug/blocks/_${block}.pug`, '')
  fs.appendFileSync(`./src/pug/${indexFile}.pug`, `  include blocks/_${block}.pug\n`)
  fs.writeFileSync(`./src/stylus/blocks/_${block}.styl`, '')
  fs.appendFileSync('./src/stylus/style.styl', `@import './blocks/_${block}.styl'\n`)
}

console.log(`Что нужно сделать?\n\n1. Создать блок\n2. Создать страницу\n`)
const choise = prompt('Ваш выбор: ')
switch (choise) {
  case '1': {
    const file = prompt('Имя файла: ')
    const blocks = prompt('Название блоков (через пробел): ').split(' ');
    blocks.forEach(block => makeBlock(block, file))
    break;
  }
  case '2': {
    console.log('Два')
    break;
  }
  default: console.log('Попытка проебана!')
}

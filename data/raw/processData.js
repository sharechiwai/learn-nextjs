
const data = require('./cantCharDic.json');
const dic = require('../characterToPinyinLookUp.json');
const datapinyin = require('./pinyinDict.json');
const datachangejie = require('../changjie.json');
const fs = require('fs');

// const generateCharacterToPinyinJsonFile = () => {
//   const obj = Object.keys(data);
//   for (let i = 0; i < obj.length; i++) {
//     const temp = data[obj[i]];
//     for (let j = 0; j < temp.length; j++) {
//       data[obj[i]][j] = removeAttribute(data[obj[i]][j], 'codepoint');
//     }
//   }
//     fs.writeFileSync('./characterToPinyin.json', JSON.stringify(data));
// };

const generateCharacterToPinyinJsonFileSingle = () => {
  const obj = Object.keys(data);
  const result = [];
  let string = '{';
  for (let i = 0; i < obj.length; i++) {
    const temp = data[obj[i]];
    result[obj[i]] = temp[0].pinyin[0];
    string += `"${obj[i]}":"${temp[0].pinyin[0]}"`;
    if(i < obj.length - 1) {
      string += ',';
    }
  }
  // append string to string
  string += '}'
  /fs.writeFileSync('./characterToPinyinLookUp.json',string);
 // JSON.(result, './characterToPinyinLookUp.json');
 console.log(string);
};




const generatePinyinToCharactersJsonFileSingle = () => {
  const obj = Object.keys(datapinyin);
  const result = [];
  let string = '{';
  for (let i = 0; i < obj.length; i++) {
    const temp = datapinyin[obj[i]];
    result[obj[i]] = temp.map(x => `"${x.char}"`);
    string += `"${obj[i]}":[${result[obj[i]]}]`;
    if(i < obj.length - 1) {
      string += ',';
    }
  }
  // append string to string
  string += '}'
  /fs.writeFileSync('./pinyinToCharacterLookUp.json',string);
 // JSON.(result, './characterToPinyinLookUp.json');
 console.log(string);
};

const generateChangjieJsonFileSingle = () => {
  
  let string = '{';
  for (let i = 0; i < datachangejie.length; i++) {
    const temp = datachangejie[i];
   
    string += `"${temp.character}":"${temp.changjie}"`;
    if(i < datachangejie.length - 1) {
      string += ',';
    }
  }
  // append string to string
  string += '}'
  /fs.writeFileSync('./changjieLooKUp.json',string);
 // JSON.(result, './characterToPinyinLookUp.json');
 console.log(string);
};

//generatePinyinToCharactersJsonFileSingle();
generateChangjieJsonFileSingle();
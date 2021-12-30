const changeJieData = require('../data/changjieLookUp.json');
const characterToPinyinData = require('../data/characterToPinyinLookUp.json');
const pinyinToCharacterData = require('../data/pinyinToCharacterLookUp.json');

const ChineseCharacterHelper = {
  // check if the character is a Chinese character
  isChineseCharacter: function (character) {
    return /^[\u4E00-\u9FA5]+$/.test(character);
  },
  // check if the character is a Chinese character
  isChineseCharacterIncludeChineseNumber: function (character) {
    return /^[\u4E00-\u9FA5\uFF10-\uFF19]+$/.test(character);
  },
  // check if the character is a Chinese character
  isChineseCharacterIncludeChineseNumberAndChinesePunctuation: function (
    character
  ) {
    return /^[\u4E00-\u9FA5\uFF10-\uFF19\u3002\uFF1F\uFF01\uFF0C\u3001\uFF1B\uFF1A\u201C\u201D\uFF08\uFF09\u300A\u300B\u300E\u300F\u3010\u3011\u300C\u300D\u3001\u3002\u300C\u300D\u3014\u3015\u2026\u2014\uFF0E\u3008\u3009\u3016\u3017\u3010\u3011\u3018\u3019\u301A\u301B\u301C\u301D\u301E\u301F]+$/.test(
      character
    );
  },
  // check if contains Chinese character
  containsChineseCharacter: function (str) {
    return /[\u4E00-\u9FA5]/.test(str);
  },
  // check if contains Chinese character or Chinese number or Chinese punctuation
  containsChineseCharacterOrChineseNumberOrChinesePunctuation: function (str) {
    return /[\u4E00-\u9FA5\uFF10-\uFF19\u3002\uFF1F\uFF01\uFF0C\u3001\uFF1B\uFF1A\u201C\u201D\uFF08\uFF09\u300A\u300B\u300E\u300F\u3010\u3011\u300C\u300D\u3001\u3002\u300C\u300D\u3014\u3015\u2026\u2014\uFF0E\u3008\u3009\u3016\u3017\u3010\u3011\u3018\u3019\u301A\u301B\u301C\u301D\u301E\u301F]+/.test(
      str
    );
  },
  getChangJieCharacter: function (character) {
    if (this.isChineseCharacter(character)) {
      return changeJieData[character];
    }
    return character;
  },
  getChangJieCharacters: function (text) {
    const characters = [];
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (this.isChineseCharacter(character)) {
        const changJieCharacter =
          ChineseCharacterHelper.getChangJieCharacter(character);
        if (changJieCharacter !== undefined) {
          characters.push(changJieCharacter + ' ');
        } else {
          characters.push(character + ' ');
        }
      } else {
        characters.push(character + ' ');
      }
    }
    return characters;
  },
  getCharacterByPinyin: (pinyin) => {
    return pinyinToCharacterData[pinyin];
  },
  getPinyinByCharacter: (character) => {
    return characterToPinyinData[character];
  },
  getPinyinBySentence: (sentence) => {
    const pinyin = [];
    for (let i = 0; i < sentence.length; i++) {
      const character = sentence[i];
      if (ChineseCharacterHelper.isChineseCharacter(character)) {
        const pinyinOfCharacter = ChineseCharacterHelper.getPinyinByCharacter(
          character
        );
        if (pinyinOfCharacter !== undefined) {
          pinyin.push(pinyinOfCharacter);
        } else {
          pinyin.push(character);
        }
      } else {
        pinyin.push(character);
      }
    }
    return pinyin;
  },
  formatResult: (result, joinCharacter) => {
    return result.join(joinCharacter);
  }
};

export default ChineseCharacterHelper;
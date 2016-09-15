# diceware-wordlist-en-eff

An add-on language pack for use with the  [lgaticaq/diceware-generator](https://github.com/lgaticaq/diceware-generator).

This package provides support for the EFF English language wordlist.

More information from the EFF about this list and how it was created can be found here:

[https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases)

## Installation

```
npm i -S diceware-generator
npm i -S diceware-wordlist-en-eff
```

## Usage

```javascript
const dwGen = require('diceware-generator');
const enEFF = require('diceware-wordlist-en-eff');

const options = {
  language: enEFF,
  wordcount: 6,
  format: 'string'
}

const pass = dwGen(options);
console.log(pass);
// "lavender lunacy quickness ladybug playful reaffirm"
```

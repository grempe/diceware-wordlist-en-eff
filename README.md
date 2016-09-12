diceware-wordlist-en-eff
=========

The EFF English wordlist for the Diceware password generation method.

More information from the EFF about this list and how it was generated can be found here:

[https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases)

This is meant to be used as an add-on language with [https://github.com/password-diet/npm-diceware](https://github.com/password-diet/npm-diceware).

This code was derived from the [https://github.com/password-diet/npm-diceware-wordlist-en](https://github.com/password-diet/npm-diceware-wordlist-en).

## Installation

  npm install diceware-wordlist-en-eff --save

## Usage

  var dw_en = require('diceware-wordlist-en-eff');  
  dw_en['34553'];		# 'impurity'

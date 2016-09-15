'use strict'

const expect = require('chai').expect
const _ = require('lodash')
const combinatorics = require('js-combinatorics')
const lang = require('../index')

describe('wordlist', function () {
  it('should have 7776 entries', function () {
    expect(_.keys(lang).length).to.equal(7776)
  })

  it('should support all possible 5-die roll combinations', function () {
    let cmb = combinatorics.baseN(['1', '2', '3', '4', '5', '6'], 5)

    cmb.forEach(function (d) {
      let dice_str = d.join('')
      expect(lang[dice_str], 'combination: ' + dice_str).to.be.a('string')
    })
  })

  it('should have no duplicate words', function () {
    let values = _.values(lang)
    expect(values.length).to.equal(_.uniq(values).length)
  })
})

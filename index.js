'use strict'
const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
  uri: 'https://www.packtpub.com/packt/offers/free-learning',
  transform: function (body) {
    return cheerio.load(body)
  }
}

rp(options)
  .then($ => {
    // Get the title of the free ebook of the day.
    console.log('The free ebook for the day is:')
    console.log($('div.dotd-title h2').text().trim())
    console.log(`Get it from ${options.uri}.`)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

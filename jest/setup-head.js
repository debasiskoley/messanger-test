const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')
// const proxylist = require('../proxy/proxy-list.json');


module.exports = async function() {
  // var index = Math.floor(Math.random() * (+proxylist.length - 0 + 1)) + 0;
  // var proxy = proxylist[index];
  

  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1366,  768',
      '--blink-settings=imagesEnabled=false',
      // `--proxy-server=${proxy}`
    ],
    headless: false
  })
  global.__BROWSER__ = browser
  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
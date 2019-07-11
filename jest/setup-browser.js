beforeAll(async () => {
  jest.setTimeout(5000000)
  page = await global.__BROWSER__.newPage();
  // console.log(page, page.prototype)
  // page.prototype.app = {}
  // page.prototype.app.login = login;
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'image')
      request.abort();
    else
      request.continue();
  });

  await page.setViewport({
    width: 1280,
    height: 600
  })
  // Turn this on when we need to see console logs directly in npm call
  // page.on('console', (...args) => console.log.apply(console, ['[Browser]', ...args]));

  page.selectRandom = async function (selector, args = {
    multiple: false
  }) {
    if (args.multiple && Array.isArray(selector)) {
      // let seletValuesArray = await this.$$eval(selector, els => Array.from(els).map( e => Array.from(e.options).map(el => el.value).filter( elm => elm !== "null")))
      let selected = []
      for (const sel of selector) {
        let selectValues = await this.$eval(sel, (el) => Array.from(el.options).map(e => e.value).filter(elm => elm !== "null"))
        selectValues.shift()
        let randomSelected = selectValues[Math.floor(Math.random() * selectValues.length)]
        await this.select(sel, randomSelected)
        selected.push(randomSelected)
      }
      return selected
    } else {
      let selectValues = await this.$eval(selector, (el) => Array.from(el.options).map(e => e.value).filter(elm => elm !== "null"))
      selectValues.shift()
      let randomSelected = selectValues[Math.floor(Math.random() * selectValues.length)]
      await this.select(selector, randomSelected)
      return randomSelected
    }
  }

})



afterAll(async () => await page.close())

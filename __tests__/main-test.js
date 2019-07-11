// import { page } from "../global";

const fs = require("fs");

describe('Instagram Export', async() => {
    
    it('Goto all links from linkfile-list',async()=>{
       await page.goto('https://www.messenger.com/t/724013114717360', {waitUntil: 'networkidle2'});
       await page.waitForSelector('#XMessengerDotComLoginViewPlaceholder');
       const idHandle = await page.$('#XMessengerDotComLoginViewPlaceholder');
       const title = await page.evaluate(e => e.innerText, idHandle);
       console.log('ddd', title);
    })

})

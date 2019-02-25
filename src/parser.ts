// import puppeteer from 'puppeteer';
// import Url from 'url-parse';


// declare var $: any;

// let parse = async () => {
//   const browser = await puppeteer.launch({
//     // headless: true,
//     devtools: true
//   });
//   const page = await browser.newPage();
//   page.once('load', () => console.log('Page loaded!'));

//   page.on('request', request => {
//     if ("xhr" === request.resourceType() && request.url().indexOf('/api/') >= 0) {
//       console.log(request.url());
//     }
//   });
//   page.on('response', response => {
//     if ('xhr' !== response.request().resourceType() || response.url().indexOf('/api/') < 0) {
//       return;
//     }
//   });
//   await page.goto('http://localhost:4200', {
//     waitUntil: 'networkidle2'
//   });
//   let bodyHTML = await page.evaluate(() => {
//     $(document).find("[href]").each((index, element) => {
//       // console.log($(element).attr('href').match(/(\/)?([a-zA-Z0-9\/-]+)+([.]*)+([a-zA-z]*)/g));
//       // remove hash in url
//       console.log($(element).attr('href').replace(/#(.*)/gm, ''));
//     });
//   });
//   await browser.close();
// };

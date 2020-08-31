const puppeteer = require('puppeteer');
const { isTSAnyKeyword } = require('@babel/types');
const timeOut = 5000;


(async () => {
  const reslu = await crear();
  console.log(reslu);
})();


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function crear(){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', timeOut);
  await delay(10000);
  await page.title();
  await page.screenshot({path: 'example1.png'});
  await page.click('button')
  await delay(5000); 
  await page.screenshot({path: 'example2.png'});
  await page.type('input[formcontrolname=firstName]', 'Josealejandro');
  await page.type('input[formcontrolname=lastName]', 'Barbosa');
  await page.type('input[formcontrolname=username]', 'jbarbosaj');
  await page.type('input[formcontrolname=password]', '12345678');
  await page.screenshot({path: 'example3.png'});
  await page.click('button');
  await delay(5000);  
  await page.type('input[formcontrolname=username]', 'jbarbosaj');
  await page.type('input[formcontrolname=password]', '12345678');
  await page.screenshot({path: 'example4.png'});
  await page.click('button');
  await delay(5000);  
  await page.screenshot({path: 'example5.png'});  
  
  const texto = await page.evaluate( () => document.body.querySelector('h1').textContent);
  console.log(texto);
  await browser.close();
  return texto;
  
}


describe('prueba', ()=>{
  jest.setTimeout(60000);
  it('Realizar el registro', async() =>{  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', timeOut);
    await delay(5000);
    await page.title();
    await page.screenshot({path: 'example1.png'});
    await page.click('button')
    await delay(5000); 
    await page.screenshot({path: 'example2.png'});
    await page.type('input[formcontrolname=firstName]', 'Josealejandro');
    await page.type('input[formcontrolname=lastName]', 'Barbosa');
    await page.type('input[formcontrolname=username]', 'jbarbosaj');
    await page.type('input[formcontrolname=password]', '12345678');
    await page.screenshot({path: 'example3.png'});
    await page.click('button');
    await delay(5000);  
    await page.type('input[formcontrolname=username]', 'jbarbosaj');
    await page.type('input[formcontrolname=password]', '12345678');
    await page.screenshot({path: 'example4.png'});
    await page.click('button');
    await delay(5000);  
    await page.screenshot({path: 'example5.png'});      
    const texto1 = await page.evaluate( () => document.body.querySelector('h1').textContent);
    expect(texto1).toEqual('Hi Josealejandro!')
  }
  );

  it('Registro con  errores', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', timeOut);
    await delay(5000);
    await page.screenshot({path: 'example6.png'});  
     await page.click('button');  
     await delay(5000);
     await page.click('button');  
     await page.screenshot({path: 'example7.png'});  
     const texto1 = await page.evaluate( () => document.body.querySelector('h2').textContent);
     console.log(texto1);
     expect(texto1).toEqual('Register')

  });
   

      it('Register Show Password min length', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', timeOut);
        await delay(5000);
        await page.screenshot({path: 'example6.png'});  
         await page.click('button');  
         await delay(5000);        
        await page.type('input[formcontrolname=firstName]', 'Josealejandro');      
        await page.type('input[formcontrolname=lastName]','Barobsa');  
        await page.type('input[formcontrolname=username]','jbarbosaj');       
        await page.type('input[formcontrolname=password]','1234');
        
        await page.click('button');

        const texto1 = await page.evaluate( () => document.body.querySelector('h2').textContent);
        console.log(texto1);
        expect(texto1).toEqual('Register')

      });
})


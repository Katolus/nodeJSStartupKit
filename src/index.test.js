import {expect} from 'chai'; //Import an assertion library with expect style
import jsdom from 'jsdom'; //JSDOM library
import fs from 'fs'; //Comes with NodeJS and lets us interact with FileSystems


describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});
//One obvious test for adding first test

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html',"utf-8"); // It loads index.html file to memory for JSDOM library to create a virtual memory interpretation of its browser-version
        jsdom.env(index, function(err,window){
            //window same is in a browser 
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            //innerHTML because we are using a referance instead of it's value 
            done();//Very important to set this as our test are asynchronuse(?) and it by this it will report back about the status of the test(don't understand this to well)
            window.close();
        });
    });
});
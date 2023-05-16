import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function getFormulaOneDrivers() {
    
    try {

        const response = await fetch('https://www.formula1.com/en/drivers.html');
        const body = await response.text();
        const $ = cheerio.load(body);

        // const wrapper = $('.row');
        // console.log(wrapper.length);

        const items = []; 
        $('.listing-items--wrapper > .row > .col-12').map((index, element) => {

            const rank = $(element).find('.rank').text();
            console.log(rank);



        });


    } catch (error) {
        console.log(error);
    }
}

getFormulaOneDrivers();
const request = require('request');
// const axios = require('axios');
const cheerio = require('cheerio');
const source = require('./src/constant');


function kompasScrapFunc(){
    request(source.kompas,(err, res, body)=>{
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const titlesArray = [];
            const articles = $('div[class="article__list clearfix"]');
            articles.each((i,el)=>{
                let result = {};
                result.title = $(el).find('div.article__list__title > h3 > a').text();
                result.link = $(el).find('div.article__list__title > h3 > a').attr('href');
                // console.log(title);
                // console.log(link);
                // console.log("------------\n");
                if(result.title!=="" && result.link!==""){
                    if(titlesArray.indexOf(result.title)==-1){
                        titlesArray.push(result.title);
                    }else{
                        console.log('article duplicate/already exist');
                    }

                }else{
                    console.log('not saved, missing data');
                } 


            })
        }
    });
}

function tribunScrapFunc(){
    request(source.tribun,(err, res, body)=>{
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const titlesArray = [];
            const articles = $('li[class="ptb15"]');
            articles.each((i,el)=>{
                let result = {};
                result.title = $(el).find('h3> a').attr('title');
                result.link = $(el).find('h3> a').attr('href');
                // console.log(title);
                // console.log(link);
                // console.log("------------\n");
                if(result.title!=="" && result.link!==""){
                    if(titlesArray.indexOf(result.title)==-1){
                        titlesArray.push(result.title);
                    }else{
                        console.log('article duplicate/already exist');
                    }

                }else{
                    console.log('not saved, missing data');
                } 

            })
        }
    });
}

function merdekaScrapFunc(){
    request.get(source.merdeka,(err, res, body)=>{
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const titlesArray = [];
            const articles = $('a[class="mdk-tag-contln-title"]');
            articles.each((i,el)=>{
                let result = {};
                result.title = $(el).text();
                let link = $(el).attr('href');
                link = 'https://www.merdeka.com'+link;
                link = result.link;
                //console.log(title);
                //console.log(link);
                // console.log("------------\n");
                if(result.title!=="" && result.link!==""){
                    if(titlesArray.indexOf(result.title)==-1){
                        titlesArray.push(result.title);
                    }else{
                        console.log('article duplicate/already exist');
                    }

                }else{
                    console.log('not saved, missing data');
                } 
            });
        }
    });
}

function detikScrapFunc(){
    request(source.detik,(err, res, body)=>{
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const titlesArray = [];
            const articles = $('article[class="list-content__item"]');
            articles.each((i,el)=>{
                let result = {};
                result.title = $(el).find('div > div.media__text > h3 > a').text().trim();
                result.link = $(el).find('div > div.media__text > h3 > a').attr('href');
                // console.log(title);
                // console.log(link);
                // console.log("------------\n");
                if(result.title!=="" && result.link!==""){
                    if(titlesArray.indexOf(result.title)==-1){
                        titlesArray.push(result.title);
                    }else{
                        console.log('article duplicate/already exist');
                    }

                }else{
                    console.log('not saved, missing data');
                } 

            })
        }
    });
}

function liputan6ScrapFunc(){
    request(source.liputan6,(err, res, body)=>{
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const titlesArray = [];
            const articles = $('article[class="articles--rows--item"]');
            articles.each((i,el)=>{
                let result = {};
                result.title = $(el).find('h4 > a').attr('title');
                result.link = $(el).find('h4 > a').attr('href');
                // console.log(title);
                // console.log(link);
                // console.log("------------\n");
                if(result.title!=="" && result.link!==""){
                    if(titlesArray.indexOf(result.title)==-1){
                        titlesArray.push(result.title);
                    }else{
                        console.log('article duplicate/already exist');
                    }
                }else{
                    console.log('not saved, missing data');
                } 

            })
        }
    });
}




module.exports = {
    kompasScrapFunc,
    tribunScrapFunc,
    merdekaScrapFunc,
    detikScrapFunc,
    liputan6ScrapFunc
}


// kompasScrapFunc();
// tribunScrapFunc()
// detikScrapFunc();
// merdekaScrapFunc();


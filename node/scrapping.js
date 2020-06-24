const request = require('request');
const cheerio = require('cheerio');
const source = require('./src/constant');

var detikArticle = require('./models/news').detikArticle;
var kompasArticle = require('./models/news').kompasArticle;
var tribunArticle = require('./models/news').tribunArticle;
var merdekaArticle = require('./models/news').merdekaArticle;
var liputan6Article = require('./models/news').liputan6Article;

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
                        kompasArticle.count({ title: result.title }, function(err, test) {
                            if (test === 0) {
                              var entry = new kompasArticle(result);
                
                              entry.save(function(err, doc) {
                                if (err) {
                                  console.log(err);
                                } else {
                                  console.log(doc);
                                }
                              });
                            }
                        });
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
                        tribunArticle.count({ title: result.title }, function(err, test) {
                            if (test === 0) {
                              var entry = new tribunArticle(result);
                
                              entry.save(function(err, doc) {
                                if (err) {
                                  console.log(err);
                                } else {
                                  console.log(doc);
                                }
                              });
                            }
                        });
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
                        merdekaArticle.count({ title: result.title }, function(err, test) {
                            if (test === 0) {
                              var entry = new merdekaArticle(result);
                
                              entry.save(function(err, doc) {
                                if (err) {
                                  console.log(err);
                                } else {
                                  console.log(doc);
                                }
                              });
                            }
                        });
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
                        detiksArticle.count({ title: result.title }, function(err, test) {
                            if (test === 0) {
                              var entry = new detikArticle(result);
                
                              entry.save(function(err, doc) {
                                if (err) {
                                  console.log(err);
                                } else {
                                  console.log(doc);
                                }
                              });
                            }
                        });
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
                        liputan6Article.count({ title: result.title }, function(err, test) {
                            if (test === 0) {
                              var entry = new liputan6Article(result);
                
                              entry.save(function(err, doc) {
                                if (err) {
                                  console.log(err);
                                } else {
                                  console.log(doc);
                                }
                              });
                            }
                        });
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


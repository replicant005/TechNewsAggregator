
// for now this code just posts the news on the frontend


const express = require('express');
const axios = require('axios');
const router = express.Router();

// route to get 
router.get('/', async (req, res) => {

try{
// hnTechNewsRes - stores the data that API fetched , ie only the story ids, 
// axios makes http request from the browser or node js , used to interact w external APIs 
const hnTechNewsRes = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
// get the first 5 in the data fetched by api 
const hnTopStories = hnTechNewsRes.data.slice(0,5);

// promise all is a asynchronous op , it can return pending , fullfilled , rejected 
// hnTechNews basically is a promise to all 
const hnTechNews = await Promise.all(

    // before Promise.all hnTechNews is an arrray of pending requests, on that being executed it is an array of fulflled requests that axios handled with external apis 
   // map takes all the ids stored in topStories array and forms a new array of requests 
 hnTopStories.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json` )
 )
);

const devtoTechNewsRes = await axios.get('https://dev.to/api/articles');
const devtoTopStories = devtoTechNewsRes.data.slice(0, 5);
    
// forming an API which combines the response both the APIS
const combinedArticles = {
    hackerNewsStories: hnTechNews.map(story => story.data),
    devToArticles: devtoTopStories
};
    // Send the combined response
    res.json(combinedArticles);

}
catch(error) {
    console.error('Error fetching articles:')
    res.status(500).json({ error: 'Failed to fetch articles' });
}

}
);


module.exports = router


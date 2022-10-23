const NEWS_URL = 'https://videogames-news2.p.rapidapi.com/videogames_news/recent';

const newsOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fbccb23c9amsh72bf12e216a9bcdp176867jsnab849c0288a2',
    'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
  },
};

export { newsOptions, NEWS_URL };

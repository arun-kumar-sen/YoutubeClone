const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YT_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YT_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_SEARCH = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&part=snippet&type=video&maxResults=50&q=`;

export const OFFSET_LIVE_CHAT = 15;

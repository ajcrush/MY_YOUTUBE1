const GOOGLE_API_KEY = "";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const GOOGLE_SEARCH_QUERY =
  "https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=oppo";

"use strict";

const api_key = "a5a91942137ffba6d5b560632b26846f";
const imageBaseURL = "https://image.tmdb.org/t/p/";

// Fetch data from a server using the 'url' and pass the result in JSON data to a 'callback' function along with an optional parameter if has 'optionalParam'

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };

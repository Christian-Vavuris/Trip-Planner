'use strict';
const FusionKey = "aj1aJ-z1e6b_O1mxu6a8UPQ0HeoqdxsrBgHZ3r3sm8rLUKcDkAv_m5ybNOOvpyRDkYl7BFYzy8dUT9GGRT2Go0-dkJK3uJ-uQsNeccbQWuO7tsCIbI8tBdS9nWr_XnYx"
const client = yelp.client(FusionKey);
const yelp = require('yelp-fusion');


var ContainerEl = document.getElementById("result-container");

var searchCity = function(){
    var userCity = window.prompt("Test (enter city)")
    const client = yelp.client(FusionKey);
    const yelp = require('yelp-fusion');
    const searchRequest = {
        location: userCity
      };
      

    client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        const prettyJson = JSON.stringify(firstResult, null, 4);
        console.log(prettyJson);
      }).catch(e => {
        console.log(e);
      });

};
searchCity();


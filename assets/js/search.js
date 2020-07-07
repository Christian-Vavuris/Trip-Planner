const fusionKey = "aj1aJ-z1e6b_O1mxu6a8UPQ0HeoqdxsrBgHZ3r3sm8rLUKcDkAv_m5ybNOOvpyRDkYl7BFYzy8dUT9GGRT2Go0-dkJK3uJ-uQsNeccbQWuO7tsCIbI8tBdS9nWr_XnYx",
      url = "https://api.yelp.com/v3/businesses/search",
      proxyurl = "https://cors-anywhere.herokuapp.com/";

var searchCity = function(){
// User inputs replace later 
  var userCity = window.prompt("Test (Enter city) ex. 'Sacramento', 'San Francisco', 'Los Angeles'");
      sort = window.prompt("SORT, this will be replaced by some other menu (please enter one of the following: best_match, rating, review_count)");
      category = window.prompt("See category list in yelp documentation ex. 'donuts' 'hotdogs' 'diners' 'deli' (Enter category)");

  var APIvar = {
    "async": true,
    "crossDomain": true,
    "url": proxyurl + url + "?location=" + userCity + "&sort_by=" + sort + "&categories=" + category + "&limit=10",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer " + fusionKey,
    }
  }

  console.log(APIvar);

  $.ajax(APIvar).done(function (response) {
    console.log(response);
    var containerEl = document.getElementById("result-container");
      for (let i = 0; i < response.businesses.length; i++) {
        var divEl = document.createElement("div");
            divEl.setAttribute("class","results");
            containerEl.append(divEl);
      }
    var divEls = document.querySelectorAll(".results");
      for (let x = 0; x < divEls.length; x++) {
        divEls[x].innerHTML = "";

        var nameEl = document.createElement("h4");
            nameEl.setAttribute("class","name");
            nameEl.innerHTML = response.businesses[x].name;
            divEls[x].append(nameEl);

        var imgEl = document.createElement("img");
            imgEl.setAttribute("src", response.businesses[x].image_url);
            divEls[x].append(imgEl);

        var phoneEl = document.createElement("p");
            phoneEl.setAttribute("class","phone");
            phoneEl.innerHTML = "Phone: " + response.businesses[x].phone;
            divEls[x].append(phoneEl);

        var ratingEl = document.createElement("p");
            ratingEl.setAttribute("class","rating");
            ratingEl.innerHTML = "Rating: " + response.businesses[x].rating;
            divEls[x].append(ratingEl);

        var reviewcountEl = document.createElement("p");
            reviewcountEl.setAttribute("class","review-count");
            reviewcountEl.innerHTML = "Reviews: " + response.businesses[x].review_count;
            divEls[x].append(reviewcountEl);

        var priceEl = document.createElement("p");
            priceEl.setAttribute("class","price");
            priceEl.innerHTML = "Price: " + response.businesses[x].price
            divEls[x].append(priceEl);

      }
  }); 
};
searchCity();
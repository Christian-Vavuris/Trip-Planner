const fusionKey = "aj1aJ-z1e6b_O1mxu6a8UPQ0HeoqdxsrBgHZ3r3sm8rLUKcDkAv_m5ybNOOvpyRDkYl7BFYzy8dUT9GGRT2Go0-dkJK3uJ-uQsNeccbQWuO7tsCIbI8tBdS9nWr_XnYx",
      url = "https://api.yelp.com/v3/businesses/search",
      proxyurl = "https://cors-anywhere.herokuapp.com/";

var searchCity = function(){
  // get the search info
  var cityInput = document.getElementById("city-input").value;
  var sort = document.getElementById("sort-type").value;
  var category = document.getElementById("category").value;

  console.log(cityInput, sort, category);

  // create the API call
  var APIvar = {
    "async": true,
    "crossDomain": true,
    "url": proxyurl + url + "?location=" + cityInput + "&sort_by=" + sort + "&categories=" + category + "&limit=10",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer " + fusionKey,
    }
  }

  console.log(APIvar);
  var resultContainer = document.getElementById("results");
  resultContainer.textContent = "Results";
  var loading = document.createElement("div");
  loading.className = "loader";
  resultContainer.append(loading);


  // call the API
  $.ajax(APIvar).done(function (response) {
    console.log(response);
    resultContainer.removeChild(loading);

    // create the info
    var containerEl = document.getElementById("result-container");
    for (let i = 0; i < response.businesses.length; i++) {
      var divEl = document.createElement("div");
      divEl.setAttribute("class","results");
      containerEl.append(divEl);

      var divEls = document.querySelectorAll(".results");
      divEls[i].innerHTML = "";

      var nameEl = document.createElement("h4");
      nameEl.setAttribute("class","name");
      nameEl.innerHTML = response.businesses[i].name;
      divEls[i].append(nameEl);

      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", response.businesses[i].image_url);
      imgEl.setAttribute("class","u-max-full-width" )
      divEls[i].append(imgEl);

      var addressEl = document.createElement("p");
      addressEl.setAttribute("class","address");
      addressEl.innerHTML = response.businesses[i].location.city + ", " + response.businesses[i].location.state;
      divEls[i].append(addressEl);

      var ratingEl = document.createElement("p");
      ratingEl.setAttribute("class","rating");
      ratingEl.innerHTML = "Rating: " + response.businesses[i].rating;
      divEls[i].append(ratingEl);

      var reviewcountEl = document.createElement("p");
      reviewcountEl.setAttribute("class","review-count");
      reviewcountEl.innerHTML = "Reviews: " + response.businesses[i].review_count;
      divEls[i].append(reviewcountEl);
    }
  }); 
};

document.getElementById("search-button").addEventListener("click", searchCity);
# Trip Planner

__*Live URL:*__  https://christian-vavuris.github.io/trip-planner/

# Table of Contents
- [Overview](#overview)
- [User's Guide](#users-guide)
  * [Getting Started](#getting-started)
  * [Search a city](#search-a-city)
  * [Creating and adding to trips](#creating-and-adding-to-trips)
- [File Breakdown](#file-breakdown)
  * [Landing Page](#landing-page)
  * [Search Page](#search-page)
  * [My Trips Page](#my-trips-page)
  * [Edit Trips Page](#edit-trips-page)
- [Contributors](#contributors)
  * [shhu21](#shhu21)
  * [Christian-Vavuris](#christian-vavuris)
  * [tmcelyea93](#tmcelyea93)
  * [Maximo100100](#maximo100100)
  * [zal-7](#zal-7)
- [Known Bugs](#known-bugs)
- [Website Preview](#website-preview)

# Overview
Trip Planner is an application that helps a user plan the perfect trip. It allows a user to search a city and create an itinerary, where they can view current weather and future weather conditions.  Our objective was to make something that is easy to use and gives the user the most relevant information regarding their upcoming trips. In addition to getting necessary information the user needs, our site stores the data locally so that the user can leave the page without worring about losing their planned trips. 
</br>
This application was built with Skeleton Framework, HTML, CSS, JQuery, Javascript, AJAX, JSON, along with the use of two API's, Open Weather Map and Yelp Fusion, to get the weather and local buisnesses information, respectfully.

# User's Guide

## Getting Started 
Click the *Get Started* button to be redirected to the search page, which is available in the `hero` section or in the navigation bar.

## Search a city
From the Search Page a user may enter a city and select from dropdown lists of Yelp categories to filter their search. (Note: If the user opts to not select from the dropdown lists, then by default the search will filter for restaurants with the highest rating). 

## Creating and adding to trips
To add a Yelp Listing to a trip, click on the trip to open the save modal.  If the user would like to create a new trip, then they may enter a new trip name in the `Create a Trip` input field and click `Create`.  Then, to select the newly created trip, the user must select it from the `Trips` dropdown list.  Or to select a previously created trip, then the user may select the desired trip name from the dropdown list.  Then, the user may choose a date to visit the chosen destination and add a description.  When the user is ready to save their additions, then click `Save`.

## View My Trips
The user may view all created trips by navigating to the `My Trips` page from the navigation bar. A trip may be deleted by clicking on the `Delete` button or viewed by clicking on the trip name.

## View a Trip
When a user chooses to view a trip, they have the option of editing the date of the places they have saved to it.  The date may be changed by clicking on the displayed date (please see [Known Bugs](#known-bugs) #1).  A user may click on the city name to view the current weather information of that city.

## Weather Forecast
If a user would like to quickly just check a city's weather, they can scroll down to find the Weather Dashboard or navigate there via the `Weather Forecast` link in the navigation bar.

# File Breakdown

## Landing Page
* `index.html`
* `index.css`
* `weather.js`

## Search Page
* `search.html`
* `search.js`
* `modal.js`
* `search.css`
* `modalstyles.css`
* `index.css`

## My Trips Page
* `userTrips.html`
* `userTrips.js`
* `userTrips.css`
* `index.css`

## Edit Trips Page
* `EditTrips.html`
* `EditTrips.js`
* `weatherModal.js`
* `EditTrips.css`
* `modalstyles.css`
* `index.css`

# Contributors
Here is a list of contributors and the files each person was in charge of. (**Note:** This list omits files that a contributor may have worked on, but was not in charge of.)

## [shhu21](https://github.com/shhu21)
* `modal.js`
* `weatherModal.js`

## [Christian-Vavuris](https://github.com/Christian-Vavuris/)
* `EditTrips.html`
* `EditTrips.js`

## [tmcelyea93](https://github.com/tmcelyea93/)
* `index.html`
* `index.css`
* `userTrips.css`
* `EditTrips.css`
* `search.css`
* `modalstyles.css`

## [Maximo100100](https://github.com/Maximo100100/)
* `search.html`
* `search.js`


## [zal-7](https://github.com/zal-7/)
* `weather.js`

# Known Bugs

1. Change the date </br>
In order change the date, the date must be clicked, then click away from the element, and then click the date again to view the date picker and edit the date.

# Website Preview
![Gif](https://github.com/Christian-Vavuris/Trip-Planner/blob/readme/gif/assets/images/Vacation.gif)

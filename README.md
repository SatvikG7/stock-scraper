# Stock Scraper Api

>**IMP: This project has been stopped as Heroku has withdrawn it's free plan. Please use https://gitlab.com/SatvikG7/stock-scraper/.**

<!-- markdownlint-disable MD001 MD013 -->

[![pipeline status](https://gitlab.com/SatvikG7/stock-scraper/badges/main/pipeline.svg)](https://gitlab.com/SatvikG7/stock-scraper/-/commits/main) [![Coverage Status](https://coveralls.io/repos/gitlab/SatvikG7/stock-scraper/badge.svg?branch=main)](https://coveralls.io/gitlab/SatvikG7/stock-scraper?branch=main)

<a href="https://rapidapi.com/satvik.g.code/api/stock-scraper" target="_blank">
    <img src="https://storage.googleapis.com/rapidapi-documentation/connect-on-rapidapi-dark.png" width="215" alt="Connect on RapidAPI">
</a>

Api for scraping value of stock from Google Finance.

## Getting started

### Documentation

Visit [https://stock-scraper.onrender.com/docs](https://stock-scraper.onrender.com/docs) for documentation of API

### API_Endpoint and API_KEY

-   Get your api endpoint and API_KEY from https://rapidapi.com/satvik.g.code/api/stock-scraper/

### Examples

1. Code to check if you have valid api key

    ```javascript
    let headersList = {
    	Accept: "*/*",
    	"X-RapidAPI-Host": "<API_ENDPOINT>",
    	"X-RapidAPI-Key": "<API_KEY"
    };

    fetch("<API_ENDPOINT>/api/", {
    	method: "GET",
    	headers: headersList
    })
    	.then(function (response) {
    		return response.text();
    	})
    	.then(function (data) {
    		console.log(data);
    	});
    ```

2. Code to fetch the value of Microsoft's Stock from NASDAQ Exchange with Google Finance

    ```javascript
    let headersList = {
    	Accept: "*/*",
    	"X-RapidAPI-Host": "<API_ENDPOINT>",
    	"X-RapidAPI-Key": "<API_KEY>"
    };

    fetch("<API_ENDPOINT>/api/MSFT/NASDAQ", {
    	method: "GET",
    	headers: headersList
    })
    	.then(function (response) {
    		return response.text();
    	})
    	.then(function (data) {
    		console.log(data);
    	});
    ```

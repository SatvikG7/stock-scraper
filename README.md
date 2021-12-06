# Stock Scraper Api

<!-- markdownlint-disable MD001 MD013 -->
[![pipeline status](https://gitlab.com/SatvikG7/stock-scraper/badges/main/pipeline.svg)](https://gitlab.com/SatvikG7/stock-scraper/-/commits/main) [![Coverage Status](https://coveralls.io/repos/gitlab/SatvikG7/stock-scraper/badge.svg?branch=main)](https://coveralls.io/gitlab/SatvikG7/stock-scraper?branch=main)

Api for scraping value of stock from Google Finance or Yahoo Finance(Coming Soon).

## Getting started

### Documentation

Visit [https:/stock-scraper-api.herokuapp.com/docs](https:/stock-scraper-api.herokuapp.com/docs/) for detailed documentation of api

### Endpoints

-   [https:/stock-scraper-api.herokuapp.com/api/](https:/stock-scraper-api.herokuapp.com/api/)
-   [https:/stock-scraper-api.herokuapp.com/api/:ticker/:exchange](https:/stock-scraper-api.herokuapp.com/api/:ticker/:exchange)

### Examples

1. Code to check if you have valid api key

    ```javascript
    let headersList = {
    	Accept: "*/*",
    	"x-api-key": "your-key"
    };

    fetch("https:/stock-scraper-api.herokuapp.com/api/", {
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
    	"x-api-key": "your-key"
    };

    fetch("https:/stock-scraper-api.herokuapp.com/api/MSFT/NASDAQ", {
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

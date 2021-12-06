# Stock Scraper Api

## Documentation

### Endpoints

-   [https:/stock-scraper-api.herokuapp.com/api/](https:/stock-scraper-api.herokuapp.com/api/)
-   [https:/stock-scraper-api.herokuapp.com/api/:ticker/:exchange](https:/stock-scraper-api.herokuapp.com/api/:ticker/:exchange/)

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

    response

    ```json
    {
    	"message": "Authenticated in Stocks API",
    	"usage": [
    		"GET https:/stock-scraper-api.herokuapp.com/api/:ticker/:exchange",
    		"x-api-key in header"
    	]
    }
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

    response

    ```json
    {
    	"ticker": "MSFT",
    	"exchange": "NASDAQ",
    	"value": "$329.49"
    }
    ```

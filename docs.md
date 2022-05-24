# Stock Scraper Api

## Documentation

### Examples

1. Code to check if you have valid api key

    ```javascript
    let headersList = {
		"Accept": "*/*",
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

    response

    ```json
    {
    	"message": "Authenticated in Stocks API",
    }
    ```

2. Code to fetch the value of Microsoft's Stock from NASDAQ Exchange with Google Finance

    ```javascript
    let headersList = {
		"Accept": "*/*",
		"X-RapidAPI-Host": "<API_ENDPOINT>",
		"X-RapidAPI-Key": "<API_KEY"
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

    response

    ```json
    {
    	"ticker": "MSFT",
    	"exchange": "NASDAQ",
    	"value": "$329.49"
    }
    ```

# StockPlan

Version: 1.0

Web application to plan and manage investment portfolio by organizing stocks into lists and creating goals for stocks. A goal for a stock includes the stock price of when to buy or sell the stock. Creating goals for stocks allows the planning of when to buy or sell a stock and automate the process of waiting. By creating goals for stocks, there is no need to monitor stocks every day. The web application will have a notification when a stock has reached a specific price. Stocks can be separated into multiple lists that help organize stocks and provides important information about each stock in the list. The application will provide statistics about the portfolio based on the stocks added to the portfolio and the goals for stocks in the portfolio.

## Features
- Add portfolio and view important statistics about portfolio
- Create goals for stocks in portfolio and view status of goals
- Create lists to organize stocks and view current information about each stock in the list
- Receive notifications when goals for stocks are completed

## Implementation
### Front-end
This repository is for the front-end of the application. This application uses Angular with Material UI for front-end. The languages used for the front-end are TypeScript, HTML and CSS.

### Back-end
The back-end for this application is a REST API built using Node.js and Express.js. The language used is JavaScript. The back-end is used for processing data and calculations. It manages a MongoDB database to store application data.

The financial data of stocks for this application is retreived by the back-end from the Finnhub API.

The StockPlan back-end REST API can be found at this repository

StockPlan back-end version: 1.0

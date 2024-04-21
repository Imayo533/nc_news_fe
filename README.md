# Project Overview

## Summary

This project was part of the Northcoders bootcamp, January 2024 - April 2024.

In this project, I:

```
1. Built a back-end API, in order to access application data.
2. Built a front-end, which utilised the back-end API.
```

The intention was to mimic the building of a real world backend service. The database used was PSQL, and interactions were done through node-postgres. The front end application was constructed using React.

## Using the app

The front end application satisfies the following user desires:

```
1. View a list of all articles
2. View a list of all articles of a certain topic
3. View an individual article
4. Vote on an article
5. View a list of comments associated with an article
6. Post a new comment to an existing article (only when a user is logged in)
7. Delete comments (as a valid user)
8. Have responsive error handling for invalid URL paths
```
You will not be able to comment on an article without being logged in. You cannot delete comments unless the user logged in was the one who posted it.

To log in, select the login button in the top right corner.

## Links

| Description               |                     Link                      |
| :------------------------ | :-------------------------------------------: |
| Hosted version of project |    https://ivanmayorga.netlify.app   |
| Back-end API              |  https://nc-news-vguq.onrender.com/api |
| Back-end repo             | https://github.com/Imayo533/nc-news |
| Creator's Github profile  |        https://github.com/Imayo533        |

# Set-up instructions

## Install Node.js

Ensure that you have Node.js installed with these minimum requirements:

```
Node.js: v18.7.0
```

To check which version you currently have installed:

```
node --version
```

## Cloning the repo

In order to clone this repo use the following:

```
git clone https://github.com/Imayo533/nc_news_fe.git
```

If you would like to make changes to this repo yourself, fork the repo then clone it.

## Installing dependencies

To install all dependencies required run:

```
npm install
```

## Running dev site locally

Once you have installed all dependencies run:

```
npm start
```
# Foodtruck API

This is a simple API using Express and Mongoose (MongoDB ORM). <br/><br/>
Authentication has been implemented using [Passport](http://www.passportjs.org/) and [JWT](https://jwt.io/).

# Getting Started
## Prerequisites
Ensure you have the following installed locally:
- [Node](https://nodejs.org/en/)

## Installing
Clone this git repository:
```sh
$ git clone https://github.com/bmuthoga/foodtruck-api.git
```
Navigate into the root of the cloned directory:
```sh
$ cd foodtruck-api
```
Install all dependencies:
```sh
$ yarn
```

## Available Scripts

#### `yarn dev`

Runs your server in development mode.

#### `yarn build`

Builds your server for production environment.

#### `yarn start`

Runs your server in production mode.

#### `yarn lint`

Runs eslint for identifying and reporting on patterns in JavaScript.

## Use API locally
Once the server is running, you can now make requests to it using a client of your choice, such as `Postman`
  - `POST /v1/account/register` create an account using email and password
  - `POST /v1/account/login` signin using email and password
  - `POST /v1/account/logout` signout
  - `GET /v1/account/me` fetch info on currently signed in user; need to be authorised <br/><br/>
  - `GET /v1/foodtruck` fetch all foodtrucks <br/><br/>
  - `POST /v1/foodtruck/add` create new foodtruck; need to be authorised  <br/><br/>
  - `GET /v1/foodtruck/:id` fetch a foodtruck using id
  - `PUT /v1/foodtruck/:id` update a foodtruck using id; need to be authorised 
  - `DELETE /v1/foodtruck/:id` delete a foodtruck using id; need to be authorised  <br/><br/>
  - `POST /v1/foodtruck/reviews/add/:id` add a review for a specific foodtruck; need to be authorised  <br/><br/>
  - `GET /v1/foodtruck/reviews/:id` get reviews for a specific foodtruck

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

To get stated and get the app running please follow the instruction below

- I utilizing the nestjs,PosgreSQL and TypeORM for my tech stack for this assignment.
- The test is diploy to github as my prefered repository.
- Both the Algorithm question and the restaurant app are incopporated together inside ivorpay folder
- the restaurant nestjs source code is inside the src folder while the algoritm is inside the algoritm folder.

## Install packages,Test Infrastructure and deploy Infrastructure

```bash
# Clone
$ https://github.com/odeyemiibukunajewole/ivorpay.git

# install dependencies
$ deploy": "npm i,

# Postman Collection Link
$ https://app.getpostman.com/join-team?invite_code=5b4c3157d01608b7fa6e2a0cd576b523

```

## Running the app

```bash

# watch mode
$ npm run start:dev

```

### API

```bash

# CREATE RESTAURANT
$ POST   http://localhost:3456/api/v1/restaurants

# input
{
    "name": "Cafe Delight",
    "address": "123 Main St, New York, NYA",
    "latitude": 40.7114,
    "longitude": -74.00595
}

# Output
{
    "name": "Cafe Delight",
    "address": "123 Main St, New York, NYA",
    "latitude": 40.7114,
    "longitude": -74.00595,
    "location": {
        "type": "Point",
        "coordinates": [
            -74.00595,
            40.7114
        ]
    },
    "id": "9134acbe-3259-4e76-b080-a83e9521d522",
    "createdAt": "2024-02-03T10:53:45.764Z",
    "updatedAt": "2024-02-03T10:53:45.764Z"


# UPDATE RESTAURANT
$ PUT   http://localhost:3456/api/v1/restaurants/9cbe493f-25f0-4e6d-8324-99cdddea25e8

# input
{
    "name": "Cafe Delight",
    "address": "123 Main St, New York, NYA",
    "latitude": 40.7114,
    "longitude": -74.00595
}

# Output
{
    "name": "Cafe Delight",
    "address": "123 Main St, New York, NYA",
    "latitude": 40.7114,
    "longitude": -74.00595,
    "location": {
        "type": "Point",
        "coordinates": [
            -74.00595,
            40.7114
        ]
    },
    "id": "9134acbe-3259-4e76-b080-a83e9521d522",
    "createdAt": "2024-02-03T10:53:45.764Z",
    "updatedAt": "2024-02-03T10:53:45.764Z"

# GET RESTAURANT BY ID
$ POST   http://localhost:3456/api/v1/restaurants/9cbe493f-25f0-4e6d-8324-99cdddea25e8

# input
{}

# Output
{
    "name": "Cafe Delight",
    "address": "123 Main St, New York, NYA",
    "latitude": 40.7114,
    "longitude": -74.00595,
    "location": {
        "type": "Point",
        "coordinates": [
            -74.00595,
            40.7114
        ]
    },
    "id": "9134acbe-3259-4e76-b080-a83e9521d522",
    "createdAt": "2024-02-03T10:53:45.764Z",
    "updatedAt": "2024-02-03T10:53:45.764Z"

# FIND NEARBY  RESTAURANT
$ GET   http://localhost:3456/restaurants?city=New York&latitude=40.7128&longitude=-74.0060&distance=100

# input
{}

# Output
{
    "name": "Cafe Delight",
    "address": "123 Main St, New York, NYA",
    "latitude": 40.7114,
    "longitude": -74.00595,
    "location": {
        "type": "Point",
        "coordinates": [
            -74.00595,
            40.7114
        ]
    },
    "id": "9134acbe-3259-4e76-b080-a83e9521d522",
    "createdAt": "2024-02-03T10:53:45.764Z",
    "updatedAt": "2024-02-03T10:53:45.764Z"

# DELETE RESTAURANT
$ DELETE   http://localhost:3456/api/v1/restaurants/1

# input
{}

# Output
{    "response": "restaurant deleted"
}

```

# fit-tracker

Nosql: Workout Tracker

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![npm](https://img.shields.io/npm/v/npm?color=orange&logo=npm)
![GitHub language count](https://img.shields.io/github/languages/count/TatyanaYarush/fit-tracker?color=green)
![GitHub last commit](https://img.shields.io/github/last-commit/TatyanaYarush/fit-tracker?color=orange)



Click here to open site:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://aqueous-shelf-70797.herokuapp.com/)

 ## Table of Contents
- [Introduction](#introduction)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Dependencies & Technologies](#Dependencies-&-technologies)
- [Resource](#information_source-resource)
- [Author](#raising_hand-author)
- [Questions](#questions)

## Introduction
A web app for tracking your workouts day in and day out. The fitness tracker allows the user to create a workout where they enter various exercises associated to the workout. The data can then be analyzed with an included stats page that provides insights into the details of all their workouts.

## User Story

```md
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
```
## Acceptance Criteria

```md
When the user loads the page, they should be given the option to create a new workout or continue with their last workout.
The user should be able to:

Add exercises to the most recent workout plan.
Add new exercises to a new workout plan.
View the combined weight of multiple exercises from the past seven workouts on the stats page.
View the total duration of each workout from the past seven workouts on the stats page.
```
## Installation
Install the packages/dependencies by hitting following command on your terminal console:

```
npm i
npm init
npm i express
npm i morgan
npm i mongoose
npm i mongojs
npm install --save

```

## Screenshots
Fitness Tracker App
![fittracker app](https://user-images.githubusercontent.com/70031550/125843676-6851948c-d665-48ce-87d2-bb42a27dfbad.JPG)

MongoDB
![screenshot_MongoDB](https://user-images.githubusercontent.com/70031550/125843706-e742ea9e-5d45-4e4c-b3c3-5b688763a0ee.JPG)

## Dependencies & Technologies

<p>
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>
<img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
<img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
<img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
</p>

```md
 "dependencies": {
    "express": "^4.17.1",
    "mongojs": "^3.1.0",
    "mongoose": "^5.13.0",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
```

### :information_source: Resource 
- [MongoDB documentation on the $addField](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/)
- [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate)
- [Set Up MongoDB Atlas](https://carleton.bootcampcontent.com/carleton-university/carl-ott-fsf-pt-02-2021-u-c/blob/master/18-NoSQL/04-Important/MongoAtlas-Setup.md)
- [Deploy with Heroku and MongoDB Atlas](https://carleton.bootcampcontent.com/carleton-university/carl-ott-fsf-pt-02-2021-u-c/blob/master/18-NoSQL/04-Important/MongoAtlas-Deploy.md)

## :raising_hand: Author 
Written by Tatyana Yarushin student in full stack web development in the Coding Bootcamp course at Carleton University

**I hope you found something interesting!** :scroll:

## Questions
:question: For any additional information or questions find me at:

 - Email: [tatyana.yarushin@gmail.com](mailto:tatyana.yarushin@gmail.com)
 
 - Github: [TatyanaYarush](https://github.com/TatyanaYarush)

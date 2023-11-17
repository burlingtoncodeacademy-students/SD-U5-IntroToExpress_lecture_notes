# Getting Started
- create a `package.json` 
  - In terminal: cli command: `npm init -y`
    - initalizes our project.
  - An index of the project.
    - denotes required dependencies to run the project.
- Install our dependencies
  - express: `npm i express`
- Create a `.gitignore` file
  - `/node_modules` within .gitignore
    - tells our local repository to ignore the `node_modules` folder when backing up.
- package-lock.json
  - locks project into required dependencies. Helps with our versioning
  - updated our `package.json` with `"main": "app.js"` instead of `index.js`.
- Create a root JS file
  - `app.js` or `index.js`

## CRUD (Create, Read, Update, Delete)
- Create: POST
- Read: GET
- Update: PUT/ PATCH
- Delete: DELETE

## Postman
- Set Methods
  - GET / POST / PUT / DELETE depending on route
  - Body
    - raw
    - JSON
    - Make a JSON object

## Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access JSON files throughout our routes.
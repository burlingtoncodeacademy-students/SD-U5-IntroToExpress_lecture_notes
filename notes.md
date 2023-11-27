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
- node_modules folder
  - Provides us access to any "behind the scenes" code that helps run express and any other dependencies installed.
- package-lock.json
  - locks project into required dependencies. Helps with our versioning
  - updated our `package.json` with `"main": "app.js"` instead of `index.js`.
- Create a root JS file
  - `app.js` or `index.js`

## Testing Route
`http://localhost:4000`
  - returns `Cannot GET /`

## Public Folder
- `__dirname` comes from **node**.
  - "directory name" - considers the parent directory. In this case: "IntroToExpress"

## CRUD (Create, Read, Update, Delete)
- Create: POST
- Read: GET 
  - browsers always do this method as a default
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
When we are expecting to pull data from the body of the browser.

In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access JSON files throughout our routes.

## req & res
- The request and response
- Request:
  - Information coming in
- Response:
  - Information going back

## Unknown Routes
- `*` accounts for a "wild card" endpoint for anything that hasn't been defined.
  - Allows for us to build a response to handle the "unknown".
### Calculator ###

Calculator application provide UI with basic mathematical operations.
All calculations have restriction to 5 numbers after the comma.

How to start
===
1. Clone repository to your local machine.
2. In `client` folder do following steps:

    2.1) Run `npm install`.

    2.2) After finishing step 2.1 run `npm build`.

3. In `server` folder do following steps: 
    
    3.1) Run `npm install`.
    
    3.2) After finishing step 3.1 run `npm start`.
    
After successful setup process - calculator application will be available at `http://localhost:8080/` address
 
 
Client
---
All npm command for client side must be run in /client folder
`npm install` - setup project

`npm start` - start project with hot reload

`npm test` - run tests

`npm build` - Build project

Executing this command is required to have ability use  server side with serving client

---

If you need to change server uri - change `proxy` parameter at `package.json`  

Server
---
Default port `8080`

All npm commands for server side must be run in /server folder

`npm install` - Install

`npm start` - start server

`npm run dev` - develop with hot reload

`npm test` - run test

Server api
---

| Uri | Method | Input | Output | Description
| ------ | ----------- | ----------| -------- | -----------|
| /calculations/add   | post | `a: number ` <br/>` b: number` | `number` |Addition operation
| /calculations/sub   | post | `a: number ` <br/>` b: number` | `number` |Subtraction operation
| /calculations/div   | post | `a: number ` <br/>` b: number` | `number` |Division operation
| /calculations/mul   | post | `a: number ` <br/>` b: number` | `number` |Multiplication operation
| /calculations/mod   | post | `a: number ` <br/>` b: number` | `number` |Modulo operation





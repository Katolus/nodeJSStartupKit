Commit 15:00 31/08/2017

Using and installing package manager (npm)

Installing and adding dependencies

Installing and performing Node Security Platform scan

***** Share work-in-progress ******
Created a source server configuration file and preparted an application to be accesible from the outside

Intersting commands:

lt --port 3000 --subdomain dupa

It might be intersting to use (BrowserSync + localtunnel) to share your code outside of your local environment on multiple devices


***** Automation with NodeJS: *******

Grunt: - Big chunk of JSON code/Large plugin ecosystem
Gulp: - In-memory streams/Faster than Grunt/Code based/Large plugin ecosystem
npm Scripts: - Declared in package.json file/ Can use OS' command line/Directly use npm packages/Call separate Node scripts/ Can use pre|post hooks

in package.json - "scripts" section you can specify scripts that should be run at given moment:
Intersting!: scripts named with a prefix "pre" like "prestart" will be run before in this example "start" scripts; responsivly with "post" after the given script

npm-run-all package to run multiple items at the same time in a cross platform way
on "start" script we can declare multiple scripts
TO USE ON npm-Scripts for multiple scripts "npm-run-all --parallel $firstScriptName $otherScriptsNames"

********* Babel - tranpiling ES5 code to standardize Javascript (translating) *********

Added Babel configuration.
Added new not available features from ES6 to startMessage.js


***** Webpack - bundling all code into one .js code that is being used ******

bundle.js is a temporary creation files

Using sourceMap can inspect original code in browser

***** Linting with ESLint ***********

ESLint recommended variable in configuration file suggest to use recommened set of Linting standards

Creating configuration files with .eslintrc.json
"rules" configuration:
example : "no-console": 1

0 - off
1 - warning
2 - error

To watch ESLint output we use ES-watch (esw - executable for es watch) package that enables much more functionalities than running ESLint from npm

You can disable eslint checks with a comment /* eslint-disable no-console */ for disabling no-console checks in that file
Another way to disable es-lint warning is to write in line a comment such as // eslint-disable-line no-console

Adding "lint:watch": "npm run lint -- --watch" to npm scripts variables that runs included there "lint" script with additional --watch variable

Also adding eslint:watch while starting app

***** Unit testing with Mocha ***********

testSetup.js to disable certain not compatible functionalities

"test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\"" to package.json 
to use a specific reporter (style in which tests are gonna be reporter) and to progress through testSetup.js script first and after following any script that he can find under listed directory and subdirectory ending with .test.js 

added test:watch to npm scritpts settings to support lunching scripts as part of starting the application

***** Continuous Integration with Travis and Appveyor ******

Adding two CI server to make sure our app runs equally on Linux and Windows based environments

Adding Travis configuration by adding .travis.yml 

Adding Appveyor configuration by adding appveyor.yml


***** HTTP Calls *****

Populating main page with mock API request data population

Declare our schema with: 

JSON schema faker 

Generate Random Data:  
- faker.js
- chance.js
- randexp.js

JSON server creates actuall server via API !

mockDataSchema.js to produce a schema for generating mock data
generateMockData.js to use jsf(JSON schema faker) to generate mock data according to the schema and save it in a file
"generate-mock-data": "babel-node buildScripts/generateMockData.js" in package.json to add action to npm Scripts

"start-mockapi": "json-server --watch src/api/db.json --port 3001" in package.json to run JSON server to produce a fake API over port 3001 using JSON data create in db.json file
It will generate a sub path for every properties declared in mockDataSchema. Super Awesome shit! 

Adding "prestart-mockapi": "npm run generate-mock-data" to (along with pre- convention) generate mockData before starting JSON server 
Add "start-mockapi" to start scripts to generate mock data each time we start an API

We will have different calls depending on env used. In prod we will have different API call than in test
This is why we create baseUrl.js that tells the application that it sees localhost env as base -> point to mockData local API | but if sees other URL variables point accordingly

Added del function call to userApi.js file + additional logic in index.js

In this module we also added .vscode/launch.json file = for Chrome Debugger purposess.

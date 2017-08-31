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


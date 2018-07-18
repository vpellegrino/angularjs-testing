# angularjs-testing
A set of AngularJS fiddles, useful for inspiring developers on how to test AngularJS building blocks

## About
This project includes (is going to include) several testing examples, showcased guidelines and patterns related to AngularJS applications.

This project is built using [NPM package manager](https://www.npmjs.com/) and [GRUNT task runner](https://gruntjs.com/) with a set of minimal dependencies for executing [KARMA test runner](https://karma-runner.github.io/).

## Build
First of all, in order to download all dependencies, it is necessary to install the project:
`$ npm install`

Test execution is performed via NPM:
`$ npm test`

## Reporting
Test results will be reported in the command line. 

Furthermore it will be produced an XML file containing test results in the project root directory: `test-results.xml`. This file is suitable for [SonarQube Continuous inspection platform](https://www.sonarqube.org/)

## Further information 
The JavaScript framework used to describe unit tests is JASMINE.

More about JASMINE can be found at <https://jasmine.github.io/pages/getting_started.html>

// Recommended node version at least v8.9.4 LTS
// To run `node problem.js` or if you want output of success failure
// Run `node problem.js && echo "PASS" || echo "FAIL"`

// Test examples use `assert` module https://nodejs.org/api/assert.html
const assert = require("assert");


const countAndSortBeans = wordList => {
}

const simpleList = ["Cannellini", "baked", "cannellini", "kidney"];

assert.equal(countAndSortBeans(simpleList), "baked 1, cannellini 2, kidney 1");

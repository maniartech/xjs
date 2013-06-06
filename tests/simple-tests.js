
//define x
var x = require("../src/x").x;

//load other x modules
require('../src/x.array').load(x);

console.log(x.range(0,5,2));

//console.log(first(a,2));

//console.log(x.last(b,2));
const {diamond} = require('./src/diamond.js')

diamond(process.argv[2], (x) => console.log(x));
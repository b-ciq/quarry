// Lets `node --test extension/test/` work: Node 22+ treats that argument as a module path and
// loads this file instead of searching the directory, so load every *.test.js here.
const fs = require('node:fs')
for (const f of fs.readdirSync(__dirname).filter(f => f.endsWith('.test.js')).sort()) require('./' + f)

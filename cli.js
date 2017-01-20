#!/usr/bin/env node
var shmooo = require('./index')

console.log(process.argv)
console.log(shmooo().replace('\\', '\\\\'))
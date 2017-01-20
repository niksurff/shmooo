#!/usr/bin/env node

const SHMOOO = '¯\\_(ツ)_/¯'
const OK = 'ツ'

const isArgv = (...args) => args.some(arg => process.argv.includes(arg))

let msg = SHMOOO

if (isArgv('-h', '--help')) {

    msg = `
Usage: shmooo [options]

  -h, --help\tOutput usage information
  -o, --ok\tIt is OK
  -c, --copy\tCopy to clipboard
`

} else {

    if (isArgv('-o', '--ok')) {

        msg = OK

    }

    if (isArgv('-c', '--copy')) {

        require('copy-paste').copy(msg)

    }

}

process.stdout.write(`${msg}\n`)
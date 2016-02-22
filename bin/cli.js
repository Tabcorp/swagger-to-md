#!/usr/bin/env node
const concat = require('concat-stream')
const cliclopts = require('cliclopts')
const minimist = require('minimist')
const util = require('util')
const path = require('path')
const fs = require('fs')

const pkg = require('../package.json')
const main = require('../')

const opts = cliclopts([
  { name: 'help', abbr: 'h', boolean: true },
  { name: 'version', abbr: 'v', boolean: true },
  { name: 'yaml', abbr: 'y', boolean: true }
])

const argv = minimist(process.argv.slice(2), opts.options())

// parse options
if (argv.version) {
  const version = require('../package.json').version
  process.stdout.write('v' + version + '\n')
  process.exit(0)
} else if (argv.help) {
  process.stdout.write(pkg.name + ' - ' + pkg.description + '\n')
  usage(0)
} else if (!argv._.length) {
  // read from stdin
  runMain(process.stdin, argv)
} else {
  // read as an argument
  const rs = fs.createReadStream(path.join(process.cwd(), argv._[0]))
  runMain(rs, argv)
}

// execute main function
// (rstream, obj) -> null
function runMain (rs, argv) {
  rs.pipe(concat(function (buf) {
    const str = String(buf)

    const html = main(str, argv)
    process.stdout.write(util.format(html) + '\n')
  }))
}

// print usage & exit
// num? -> null
function usage (exitCode) {
  const rs = fs.createReadStream(path.join(__dirname, '/usage.txt'))
  const ws = process.stdout
  rs.pipe(ws)
  ws.on('finish', process.exit.bind(null, exitCode))
}

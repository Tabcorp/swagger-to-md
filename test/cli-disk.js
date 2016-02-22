const exec = require('child_process').exec
const rimraf = require('rimraf')
const path = require('path')
const test = require('tape')
const bl = require('bl')
const fs = require('fs')

const expath = path.join(__dirname, 'fixtures/expected-json.md')
const expected = fs.readFileSync(expath, 'utf8').replace(/\s+/g, '')

test('transform a JSON file from disk', function (t) {
  t.plan(2)
  const cmd = path.join(__dirname, '../bin/cli.js') + ' test/fixtures/api.json'

  const child = exec(cmd)
  const buf = bl()
  child.stdout.pipe(buf)
  child.stderr.pipe(process.stderr)

  child.on('close', function () {
    const result = String(buf.duplicate()).trim()
    t.equal(result, expected, 'output is same')
    rimraf(path.join(__dirname, 'tmp'), function (err) {
      t.ifError(err, 'no err')
    })
  })
})

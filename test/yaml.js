const path = require('path')
const test = require('tape')
const fs = require('fs')

const swaggerToMd = require('../')

const expath = path.join(__dirname, 'fixtures/expected-yaml.md')
const expected = fs.readFileSync(expath, 'utf8').replace(/\s/g, '')
const inpath = path.join(__dirname, 'fixtures/api.yaml')
const infile = fs.readFileSync(inpath, 'utf8')

test('transform YAML to Markdown', function (t) {
  t.plan(1)

  const output = swaggerToMd(infile, { yaml: true })
  t.equal(output, expected.trim(), 'output is expected')
})

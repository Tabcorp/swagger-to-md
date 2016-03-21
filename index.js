const vdom = require('virtual-dom')
const assert = require('assert')
const yaml = require('yamljs')

const create = vdom.create
const h = vdom.h

module.exports = nodeSwaggerToMd

// Transform swagger to markdown
// (str, obj) -> (fn, obj) -> null
function nodeSwaggerToMd (spec, opts) {
  opts = opts || {}

  assert.equal(typeof opts, 'object', 'opts is an object')

  if (opts.yaml) spec = yaml.parse(spec)
  else spec = JSON.parse(spec)

  assert.equal(typeof spec, 'object', 'spec is object')

  const head = h('tr', [
    h('td', 'Path'),
    h('td', 'Method'),
    h('td', 'Summary')
  ])

  const rawData = []

  // extract relevant data from set
  Object.keys(spec.paths).forEach(function (route) {
    Object.keys(spec.paths[route]).forEach(function (method) {
      const summary = spec.paths[route][method].summary || ''
      rawData.push({ route: route, method: method, summary: summary })
    })
  })

  const sortedData = rawData.sort(function (a, b) {
    if (a.route < b.route) return -1
    if (a.route === b.route) return 0
    return 1
  })

  const body = sortedData.reduce(function (arr, chunk) {
    arr.push(h('tr', [
      h('td', chunk.route),
      h('td', chunk.method.toUpperCase()),
      h('td', chunk.summary)
    ]))
    return arr
  }, [])

  const tree = h('table', [ head ].concat(body))
  return create(tree).toString()
}

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

  // convert swagger to table rows
  const body = Object.keys(spec.paths).reduce(function (arr, route) {
    Object.keys(spec.paths[route]).forEach(function (method) {
      const summary = spec.paths[route][method].summary || ''
      arr.push(h('tr', [
        h('td', route),
        h('td', method.toUpperCase()),
        h('td', summary)
      ]))
    })
    return arr
  }, [])

  const tree = h('table', [ head ].concat(body))
  return create(tree).toString()
}

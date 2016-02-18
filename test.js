const test = require('tape')
const nodeSwaggerToMd = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(nodeSwaggerToMd)
})

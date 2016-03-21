# node-swagger-to-md [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Transform swagger to markdown. Output is sorted alphabetically.

## Usage
```txt
Usage: swagger-to-md <swagger>

Options:
  -h, --help        Output usage information
  -v, --version     Output version number
  -y, --yaml        Use swagger YAML instead of JSON

Examples:
  $ swagger-to-md spec.json      # Transform swagger to markdown
  $ swagger-to-md < spec.json    # Transform swagger to markdown
  $ swagger-to-md -y spec.yaml   # Transform swagger yaml to markdown

Docs: https://github.com/TabDigital/node-swagger-to-md
Bugs: https://github.com/TabDigital/node-swagger-to-md/issues
```

## Example output
<table>
  <tr>
    <td><b>path</b></td>
    <td><b>method</b></td>
    <td><b>summary</b></td>
  </tr>
  <tr>
    <td>/foo/bar</td>
    <td>GET</td>
    <td>get all bars in the area</td>
  </tr>
  <tr>
    <td>/bin/baz</td>
    <td>PUT</td>
    <td>add a new baz to the region</td>
  </tr>
</table>

## Installation
```sh
$ npm install swagger-to-md
```

## See Also
- [injectmd](https://github.com/TabDigital/node-injectmd)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/node-swagger-to-md.svg?style=flat-square
[3]: https://npmjs.org/package/node-swagger-to-md
[4]: https://img.shields.io/travis/TabDigital/node-swagger-to-md/master.svg?style=flat-square
[5]: https://travis-ci.org/TabDigital/node-swagger-to-md
[6]: https://img.shields.io/codecov/c/github/TabDigital/node-swagger-to-md/master.svg?style=flat-square
[7]: https://codecov.io/github/TabDigital/node-swagger-to-md
[8]: http://img.shields.io/npm/dm/node-swagger-to-md.svg?style=flat-square
[9]: https://npmjs.org/package/node-swagger-to-md
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard

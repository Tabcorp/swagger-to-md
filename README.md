# node-swagger-to-md

[![npm version][0]][1] [![build status][2]][3] [![test coverage][4]][5]
[![downloads][6]][7] [![js-standard-style][8]][9]

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

[0]: https://img.shields.io/npm/v/swagger-to-md.svg?style=flat-square
[1]: https://npmjs.org/package/swagger-to-md
[2]: https://img.shields.io/travis/TabDigital/node-swagger-to-md/master.svg?style=flat-square
[3]: https://travis-ci.org/TabDigital/node-swagger-to-md
[4]: https://img.shields.io/codecov/c/github/TabDigital/node-swagger-to-md/master.svg?style=flat-square
[5]: https://codecov.io/github/TabDigital/node-swagger-to-md
[6]: http://img.shields.io/npm/dm/swagger-to-md.svg?style=flat-square
[7]: https://npmjs.org/package/swagger-to-md
[8]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[9]: https://github.com/feross/standard

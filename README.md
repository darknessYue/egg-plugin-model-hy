# egg-plugin-model-hy

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-plugin-model-hy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-plugin-model-hy
[travis-image]: https://img.shields.io/travis/eggjs/egg-plugin-model-hy.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-plugin-model-hy
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-plugin-model-hy.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-plugin-model-hy?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-plugin-model-hy.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-plugin-model-hy
[snyk-image]: https://snyk.io/test/npm/egg-plugin-model-hy/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-plugin-model-hy
[download-image]: https://img.shields.io/npm/dm/egg-plugin-model-hy.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-plugin-model-hy

<!--
Description here.
-->

## Install

```bash
$ npm i egg-plugin-model-hy --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.pluginModelHy = {
  enable: true,
  package: 'egg-plugin-model-hy',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.pluginModelHy = {
  url: 'mongodb://xxx'
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

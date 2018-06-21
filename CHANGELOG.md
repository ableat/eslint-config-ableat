# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.4] - 2018-06-21
### Added
- Support for ES6 Classes
- `class-methods-use-this`: error
- `func-call-spacing`: error, never
- `func-style`: error, declaration
- `lines-between-class-members`: error, always
- `no-class-assign`: error
- `no-dupe-class-members`: error
- Support for node 10.x
###Fixed
- An issue where CI wouldn't run tests
### Removed
- `new-cap`: error

## [1.0.3] - 2018-01-23
### Added
- Support for ES6 Promises
- `promise/no-nesting`: error
- `promise/always-return`: off
- `promise/avoid-new`: off
### Fixed
- Linting issues in package.json

## [1.0.2] - 2018-01-11
### Changed
- .eslintrc is not a strict JSON file renamed to .eslintrc.json
### Fixed
- An issue where testing would fail because .eslintrc wasn't a JSON file

## [1.0.1] - 2018-01-09
### Fixed
- README was pointing to the wrong npm module

## [1.0.0] - 2018-01-09
### Added
- Support for nvm
- Support for shippable
- Linting test
- Dev dependency of eslint for testing
### Changed
- Moved rules to .eslintrc file
- index.js now points to .eslintrc file
### Fixed
- Better layout of README
- Issue where package-lock.json was removed

## [0.1.2] - 2018-01-03
### Added
- README with usage and description of rules
### Fixed
- Linting on package.json

## [0.1.1] - 2017-12-22
### Changed
- eslint is now a peer dependency instead of a dependency
### Removed
- `id-length` rule

## 0.1.0 - 2017-12-22
### Added
- Created the ruleset for ableat

[Unreleased]: https://github.com/ableat/eslint-config-ableat/compare/v1.0.4...HEAD
[1.0.4]: https://github.com/ableat/eslint-config-ableat/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/ableat/eslint-config-ableat/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/ableat/eslint-config-ableat/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/ableat/eslint-config-ableat/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ableat/eslint-config-ableat/compare/v0.1.2...v1.0.0
[0.1.2]: https://github.com/ableat/eslint-config-ableat/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/ableat/eslint-config-ableat/compare/v0.1.0...v0.1.1

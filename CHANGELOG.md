# Changelog
## Release (2023-12-12)

ember-cli-head 3.0.0 (major)

#### :boom: Breaking Change
* `ember-cli-head`
  * [#113](https://github.com/ember-fastboot/ember-cli-head/pull/113) drop support for node < v16 ([@mansona](https://github.com/mansona))

#### :house: Internal
* `ember-cli-head`
  * [#107](https://github.com/ember-fastboot/ember-cli-head/pull/107) update to v4.12 with ember-cli-update ([@mansona](https://github.com/mansona))
  * [#115](https://github.com/ember-fastboot/ember-cli-head/pull/115) swap to pnpm ([@mansona](https://github.com/mansona))
  * [#112](https://github.com/ember-fastboot/ember-cli-head/pull/112) setup release-plan ([@mansona](https://github.com/mansona))
  * [#105](https://github.com/ember-fastboot/ember-cli-head/pull/105) update ember-auto-import devDependency to v2 ([@mansona](https://github.com/mansona))
  * [#100](https://github.com/ember-fastboot/ember-cli-head/pull/100) unify CI with the default output of ember addon ([@mansona](https://github.com/mansona))

#### Committers: 1
- Chris Manson ([@mansona](https://github.com/mansona))

## v2.0.0 (2021-05-26)

#### :boom: Breaking Change
* [#94](https://github.com/ronco/ember-cli-head/pull/94) Refactor to use @glimmer/components ([@cibernox](https://github.com/cibernox))
* [#94](https://github.com/ronco/ember-cli-head/pull/94) Drop Node 10 support ([@cibernox](https://github.com/cibernox))
* [#94](https://github.com/ronco/ember-cli-head/pull/94) Drop Ember < 3.16 ([@cibernox](https://github.com/cibernox))

#### :rocket: Enhancement
* [#86](https://github.com/ronco/ember-cli-head/pull/86) Test ember-cli-head against embroider build ([@kiwiupover](https://github.com/kiwiupover))

#### Committers: 5
- Dave Laird ([@kiwiupover](https://github.com/kiwiupover))
- Isaac Lee ([@ijlee2](https://github.com/ijlee2))
- Miguel Camba ([@cibernox](https://github.com/cibernox))
- Peter Wagenet ([@wagenet](https://github.com/wagenet))
- Yoran Brondsema ([@YoranBrondsema](https://github.com/YoranBrondsema))


## v1.0.0 (2020-06-02)

#### :boom: Breaking Change
* [#73](https://github.com/ronco/ember-cli-head/pull/73) Drop support for Node < 10 and Ember < 2.18. ([@chancancode](https://github.com/chancancode))
* [#53](https://github.com/ronco/ember-cli-head/pull/53) Update to ember 3.7 ([@snewcomer](https://github.com/snewcomer))

#### :rocket: Enhancement
* [#78](https://github.com/ronco/ember-cli-head/pull/78) Update dependencies & devDependencies to latest. ([@rwjblue](https://github.com/rwjblue))
* [#71](https://github.com/ronco/ember-cli-head/pull/71) Migrate to `{{#in-element}}` (from emberjs/rfcs#287) ([@gitKrystan](https://github.com/gitKrystan))

#### :house: Internal
* [#79](https://github.com/ronco/ember-cli-head/pull/79) Add release automation. ([@rwjblue](https://github.com/rwjblue))

#### Committers: 5
- Godfrey Chan ([@chancancode](https://github.com/chancancode))
- Krystan HuffMenne ([@gitKrystan](https://github.com/gitKrystan))
- Ricardo Mendes ([@locks](https://github.com/locks))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))

## [v0.4.1](https://github.com/ronco/ember-cli-head/tree/v0.4.1) (2018-05-07)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.4.0...v0.4.1)

**Closed issues:**

- Meta elements "ember-cli-head-start" and "ember-cli-head-end" missing "content" attribute [\#47](https://github.com/ronco/ember-cli-head/issues/47)
- Does this repo really only work with Fastboot now? [\#46](https://github.com/ronco/ember-cli-head/issues/46)
- When loading page you get no title while the application renders [\#43](https://github.com/ronco/ember-cli-head/issues/43)
- Make FastBoot DOM smashing opt-in [\#41](https://github.com/ronco/ember-cli-head/issues/41)
- 0.4.0 made all my head data stop working [\#40](https://github.com/ronco/ember-cli-head/issues/40)
- rootURL favicon link difficulties \(not using fastboot\) [\#39](https://github.com/ronco/ember-cli-head/issues/39)

**Merged pull requests:**

- Added empty content attribute to meta tags [\#50](https://github.com/ronco/ember-cli-head/pull/50) ([samcic](https://github.com/samcic))
- Avoid issues with Chrome suid on CI. [\#49](https://github.com/ronco/ember-cli-head/pull/49) ([rwjblue](https://github.com/rwjblue))
- Refactor instance-initializer [\#45](https://github.com/ronco/ember-cli-head/pull/45) ([mydea](https://github.com/mydea))

## [v0.4.0](https://github.com/ronco/ember-cli-head/tree/v0.4.0) (2017-09-21)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.3.1...v0.4.0)

**Closed issues:**

- Acceptance testing [\#38](https://github.com/ronco/ember-cli-head/issues/38)

**Merged pull requests:**

- Use `-in-element` to render at appropriate time [\#37](https://github.com/ronco/ember-cli-head/pull/37) ([rondale-sc](https://github.com/rondale-sc))

## [v0.3.1](https://github.com/ronco/ember-cli-head/tree/v0.3.1) (2017-06-27)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.2.2...v0.3.1)

**Closed issues:**

- head-browser instance-initializer not found from ember-page-title, booting the app fails \(v0.3, fastboot rc3\) [\#34](https://github.com/ronco/ember-cli-head/issues/34)
- Fastboot deprecation [\#29](https://github.com/ronco/ember-cli-head/issues/29)

**Merged pull requests:**

- Fix head-fastboot instance-initializer overriding head-browser [\#35](https://github.com/ronco/ember-cli-head/pull/35) ([simonihmig](https://github.com/simonihmig))
- Make addon more idiomatic at the expense of making it 2.10+ & fastboot 1.0rc+ [\#32](https://github.com/ronco/ember-cli-head/pull/32) ([cibernox](https://github.com/cibernox))

## [v0.2.2](https://github.com/ronco/ember-cli-head/tree/v0.2.2) (2017-06-01)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.2.1...v0.2.2)

**Merged pull requests:**

- Make it work without jQuery [\#27](https://github.com/ronco/ember-cli-head/pull/27) ([cibernox](https://github.com/cibernox))

## [v0.2.1](https://github.com/ronco/ember-cli-head/tree/v0.2.1) (2017-06-01)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.2.0...v0.2.1)

**Closed issues:**

- Incompatible with FastBoot [\#26](https://github.com/ronco/ember-cli-head/issues/26)
- Cannot find fastboot-filter-initializers [\#22](https://github.com/ronco/ember-cli-head/issues/22)

**Merged pull requests:**

- Prepare for FastBoot 1.0 [\#21](https://github.com/ronco/ember-cli-head/pull/21) ([simonihmig](https://github.com/simonihmig))

## [v0.2.0](https://github.com/ronco/ember-cli-head/tree/v0.2.0) (2017-04-26)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.1.5...v0.2.0)

## [v0.1.5](https://github.com/ronco/ember-cli-head/tree/v0.1.5) (2017-04-26)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.1.4...v0.1.5)

**Closed issues:**

- Fastboot with Ember 2.11: EventDispatcher should never be instantiated in fastboot mode. [\#18](https://github.com/ronco/ember-cli-head/issues/18)

**Merged pull requests:**

- Upgrade to ember-cli 2.12.2 / Babel6 / yarn [\#20](https://github.com/ronco/ember-cli-head/pull/20) ([simonihmig](https://github.com/simonihmig))

## [v0.1.4](https://github.com/ronco/ember-cli-head/tree/v0.1.4) (2017-01-25)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.1.3...v0.1.4)

**Merged pull requests:**

- Check ember-source version from NPM, if not found use ember from bower [\#19](https://github.com/ronco/ember-cli-head/pull/19) ([josemarluedke](https://github.com/josemarluedke))

## [v0.1.3](https://github.com/ronco/ember-cli-head/tree/v0.1.3) (2016-11-10)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.1.2...v0.1.3)

**Merged pull requests:**

- \[fix\] Correct logic for pushing app-lt-2-10 tree [\#14](https://github.com/ronco/ember-cli-head/pull/14) ([arjansingh](https://github.com/arjansingh))

## [v0.1.2](https://github.com/ronco/ember-cli-head/tree/v0.1.2) (2016-10-19)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.1.1...v0.1.2)

**Merged pull requests:**

- Account for 2.9.0 not including Glimmer 2. [\#13](https://github.com/ronco/ember-cli-head/pull/13) ([rwjblue](https://github.com/rwjblue))

## [v0.1.1](https://github.com/ronco/ember-cli-head/tree/v0.1.1) (2016-09-08)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.1.0...v0.1.1)

**Closed issues:**

- ember-alpha support [\#10](https://github.com/ronco/ember-cli-head/issues/10)

**Merged pull requests:**

- Enable usage in Ember 2.9 beta and above. [\#11](https://github.com/ronco/ember-cli-head/pull/11) ([rwjblue](https://github.com/rwjblue))

## [v0.1.0](https://github.com/ronco/ember-cli-head/tree/v0.1.0) (2016-06-14)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.0.7...v0.1.0)

**Closed issues:**

- Handle lack of `app/templates/head.hbs` more gracefully. [\#7](https://github.com/ronco/ember-cli-head/issues/7)

**Merged pull requests:**

- include a default head template in app [\#9](https://github.com/ronco/ember-cli-head/pull/9) ([ronco](https://github.com/ronco))
- remove unneeded slash on meta elements per HTML5 and ember-cli-template-lint [\#8](https://github.com/ronco/ember-cli-head/pull/8) ([openhouse](https://github.com/openhouse))

## [v0.0.7](https://github.com/ronco/ember-cli-head/tree/v0.0.7) (2016-05-11)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.0.6...v0.0.7)

**Merged pull requests:**

- Remove HTML Comments from head template. [\#6](https://github.com/ronco/ember-cli-head/pull/6) ([rwjblue](https://github.com/rwjblue))

## [v0.0.6](https://github.com/ronco/ember-cli-head/tree/v0.0.6) (2016-05-03)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.0.5...v0.0.6)

**Closed issues:**

- head inside head [\#3](https://github.com/ronco/ember-cli-head/issues/3)

**Merged pull requests:**

- Remove harding of isDevelopingAddon. [\#5](https://github.com/ronco/ember-cli-head/pull/5) ([rwjblue](https://github.com/rwjblue))

## [v0.0.5](https://github.com/ronco/ember-cli-head/tree/v0.0.5) (2016-03-17)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.0.4...v0.0.5)

**Merged pull requests:**

- added option to suppress browser rendering for fastboot [\#4](https://github.com/ronco/ember-cli-head/pull/4) ([habdelra](https://github.com/habdelra))

## [v0.0.4](https://github.com/ronco/ember-cli-head/tree/v0.0.4) (2016-03-01)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.0.3...v0.0.4)

**Merged pull requests:**

- Clear fast boot rendered head on browser boot [\#2](https://github.com/ronco/ember-cli-head/pull/2) ([ronco](https://github.com/ronco))

## [v0.0.3](https://github.com/ronco/ember-cli-head/tree/v0.0.3) (2016-02-10)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.0.2...v0.0.3)

## [v0.0.2](https://github.com/ronco/ember-cli-head/tree/v0.0.2) (2016-02-10)
[Full Changelog](https://github.com/ronco/ember-cli-head/compare/v0.0.1...v0.0.2)

## [v0.0.1](https://github.com/ronco/ember-cli-head/tree/v0.0.1) (2016-02-10)
**Merged pull requests:**

- Fastboot compatibility [\#1](https://github.com/ronco/ember-cli-head/pull/1) ([ronco](https://github.com/ronco))

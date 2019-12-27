<div align="center">
  <h1>
    <img src="https://2019.foss4g.org/wp-content/uploads/2019/02/logo_here-194x178.png" alt="" width="100"/>
    <br />
    use-here-api
    <br />
  </h1>

  [![made-for-react](https://img.shields.io/badge/Made%20for-React-1f425f.svg?style=for-the-badge)](https://reactjs.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![GitHub release](https://img.shields.io/github/release/CloudPower97/use-here-api.svg?style=for-the-badge)](https://GitHub.com/CloudPower97/use-here-api/releases/)
[![GitHub contributors](https://img.shields.io/github/contributors/CloudPower97/use-here-api.svg?style=for-the-badge)](https://GitHub.com/CloudPower97/use-here-api/graphs/contributors/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

  <sup>
    Collection of convenient <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> which lets you easily use <a href="https://developer.here.com/">HERE RESTful API services</a>.</em>
  </sup>
  <br />
  <br />
  <br /> -->
  <pre>npm i <a href="https://www.npmjs.com/package/@cloudpower97/use-here-api">use-here-api</a></pre>
  or
  <pre>yarn add <a href="https://www.npmjs.com/package/@cloudpower97/use-here-api">use-here-api</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

<details>
<summary><strong>Table of Contents</strong></summary>

- [Overview](#overview)
- [Documentation](#documentation)
  - [Usage](#usage)
  - [Options](#options)
- [Contributing](#contributing)
  - [Development](#development)
  - [Commit Guidelines](#commit-guidelines)

</details>

---

## Overview

`use-here-api` exposes convenient hooks which lets you easily integrate <a href="https://developer.here.com/">HERE RESTful API services</a> in your React.js projects.

---

## Documentation

At the moment the following `hooks` are implementend:

  - Geocoding and Search
      - `useForwardGeocoding` -- Submit an address to request the corresponding geocoordinates. Addresses may use structured input or free-form search strings with complete or partial address information.
      The more detailed the address you submit, the higher the potential match accuracy.

      - `useReverseGeocoding` -- Submit a geocoordinate and an optional radius to request the corresponding address.

      - `useAutocomplete` -- Get better search suggestions for your addresses with fewer keystrokes.

 - `useWeather` -- Give insights into real-time weather forecasts, alerts, and astronomical info for any location.
  
---


## Contributing

> Yes please!

Pull requests and [reporting an issue](https://github.com/CloudPower97/use-here-api/issues) are always welcome :D

### Development

Fork and clone the repo:

`git clone git@github.com:your-username/use-here-api.git`

Create a branch for the feature/fix:

`git checkout -b feat:new-great-idea`

Once you are done, push to your fork and submit a pull request.

And remember,

<img src="https://i.ibb.co/kmCyRnp/photo6294205586979530928.jpg" border="0" width="256">

#### Commit Guidelines

We follow the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits).

Refer to their documentation for more information.

Note: If you DON'T follow the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) you will not be able to commit your changes.

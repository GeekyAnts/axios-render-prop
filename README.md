# Consume Axios in a Declarative way, using JSX

A wrapper React component which uses axios internally to make API calls.

```
yarn add axios
yarn add axios-render-prop
```

Example:

```jsx
import Axios from "axios-render-prop";

// ...

<Axios url="https://api.github.com/users/sanketsahusoft">
  {({ loading, error, response }) => {
    return (
      <div>
        {loading ? <div>Loading</div> : <div>Name: {response.data.name}</div>}
      </div>
    );
  }}
</Axios>;
```

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe axios-render-prop here.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

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

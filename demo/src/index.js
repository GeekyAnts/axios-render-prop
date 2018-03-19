import React, { Component } from "react";
import { render } from "react-dom";

import Axios from "../../src";

class Demo extends Component {
  render() {
    return (
      <Axios url="https://api.github.com/users/sanketsahusoft">
        {({ loading, error, response }) => {
          return (
            <div>
              {loading ? (
                <div>Loading</div>
              ) : (
                <div>Name: {response.data.name}</div>
              )}
            </div>
          );
        }}
      </Axios>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

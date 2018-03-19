import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Component from "src/";

describe("Component", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a welcome message", () => {
    render(
      <Component url="https://api.github.com/users/sanketsahusoft">
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
      </Component>,
      node,
      () => {
        expect(node.innerHTML).toContain("Loading");
      }
    );
  });
});

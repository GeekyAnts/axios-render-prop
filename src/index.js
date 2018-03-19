import React, { Component } from "react";
import axios from "axios";

export default class extends Component {
  static defaultProps = {
    method: "get",
    config: {}
  };

  constructor(props) {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    axios[this.props.method](this.props.url, this.props.config).then(
      response => {
        this.setState({ loading: false, response });
      },
      response => {
        this.setState({ loading: false, error: true, response });
      }
    );
  }

  save() {
    alert("Saving");
  }

  render() {
    return this.props.children(this.state);
  }
}

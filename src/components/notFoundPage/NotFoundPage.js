import React, { Component } from "react";

class NotFoundPage extends Component {
  state = {};

  componentDidMount() {
    this.props.history.push("/");
  }
  render() {
    return <h1>404 - page not found</h1>;
  }
}

export default NotFoundPage;

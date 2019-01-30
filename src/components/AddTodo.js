import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          value={this.state.text}
        />
        <input type="submit" name="Submit" value="Submit" />
      </form>
    );
  }
}

export default AddTodo;

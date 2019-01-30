import React, { Component } from "react";
import AddTodo from "./AddTodo";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Eat", "Drink"],
      text: ""
    };
  }

  addTodo = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  deleteTodo = (e, i) => {
    this.setState({
      todos: this.state.todos.filter((todo, index) => index !== i)
    });
  };

  updateTodo = (e, i) => {
    this.setState(state => (state.todos[i] = "fo"));
  };

  render() {
    const todos = this.state.todos.map((todo, index) => (
      <p key={index}>
        {todo} <span onClick={e => this.deleteTodo(e, index)}>x</span>
        <span onClick={e => this.updateTodo(e, index)}>!</span>
      </p>
    ));
    return (
      <div>
        {todos}
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Todos;

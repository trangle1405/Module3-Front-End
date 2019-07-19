import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./img/tick.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: "đi chơi", isComplete: true },
        { title: "làm bài tập", isComplete: false },
        { title: "học bài", isComplete: false }
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item) {
    return event => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event) {
   
      let text = this.state.newItem;
      if (event.keyCode === 13) {
      
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem:'',
        todoItems: [{ title: text, isComplete: false },
           ...this.state.todoItems
          ]
      });
    } 
  }

  onChange(event){
    this.setState({
      newItem: event.target.value,
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} />
            <input
              type="text"
              placeholder="add a new item"
              value={newItem}
              onChange = {this.onChange}
              onKeyUp={this.onKeyUp}
            />
          </div>
          {todoItems.length &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                onclick={this.onItemClicked(item)}
              />
            ))}
        </div>
      );
    }
  }
}

export default App;

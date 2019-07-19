import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import checkImg from "../img/check.svg";
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
  render() {
    const { item, onclick } = this.props;
    let url = checkImg;
    if (item.isComplete){
      url = checkCompleteImg;
    }
    return (
      <div
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete
        })}>
        <img  onClick={onclick} src={url} width={32} ></img>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;

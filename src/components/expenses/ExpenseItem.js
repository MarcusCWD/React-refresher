import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props) => {

  let title = props.exp.title
  const clickHandler = () => {
    console.log("clicked")
    title = "updated!"
  }
  return (
    // JSX
    <React.Fragment>
      <Card className="expense-item">
        <ExpenseDate date={props.exp.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.exp.amount}</div>
        </div>
        {/* important to note!
        clickHandler() should not be called with ()!
        JS will excute the line of code when line of code is parsed
        jsx is being returned when inital render */}
        <button onClick={clickHandler}>this is a button</button>
      </Card>
    </React.Fragment>
  );
};
export default ExpenseItem;

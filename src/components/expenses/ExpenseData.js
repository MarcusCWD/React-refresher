import React from "react";
import "./ExpenseData.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseData = (props) => {
  return (
    <React.Fragment>
      <Card className="expenses">
        <ExpenseItem exp={props.exp[0]} />
        <ExpenseItem exp={props.exp[1]} />
        <ExpenseItem exp={props.exp[2]} />
        <ExpenseItem exp={props.exp[3]} />
      </Card>
    </React.Fragment>
  );
};
export default ExpenseData;

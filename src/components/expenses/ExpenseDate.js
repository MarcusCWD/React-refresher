import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (propsDate) => {
  const month = propsDate.date.toLocaleString("en-US", { month: "long" });
  const day = propsDate.date.toLocaleString("en-US", { day: "2-digit" });
  const year = propsDate.date.getFullYear();
  return (
    // JSX
    <React.Fragment>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </React.Fragment>
  );
};
export default ExpenseDate;

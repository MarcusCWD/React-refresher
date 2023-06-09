import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount:'',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // })
    // console.log(userInput);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
    // console.log(userInput);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    // console.log(userInput);
  };

  const submitHandler = (event) => {
    // prevent of default request being sent. 
    // page will not reload
    event.preventDefault();
    const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      data:new Date(enteredDate)
    };
    console.log(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__contorls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

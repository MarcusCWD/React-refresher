import ExpenseData from "./components/expenses/ExpenseData";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "rose", amount: 39.99, date: new Date(2023, 2, 28) },
    { title: "daisy", amount: 89.99, date: new Date(2023, 3, 28) },
    { title: "lily", amount: 24.99, date: new Date(2023, 4, 28) },
    { title: "tulip", amount: 81.99, date: new Date(2023, 5, 28) },
  ];
  return (
    <div>
      <NewExpense/>
      <ExpenseData exp={expenses} />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_Expenses = [{
        id: "e1",
        title: "Table",
        amount: 2000,
        date: new Date(2022, 5, 20),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 12000,
        date: new Date(2022, 3, 13)
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 6000,
        date: new Date(2021, 4, 28),
    },
    {
        id: "e4",
        title: "Wooden Desk",
        amount: 1000,
        date: new Date(2022, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_Expenses);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <h1 style={{color:'white', textAlign: 'center'}}>Expense Tracker</h1>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
      );
};

export default App;
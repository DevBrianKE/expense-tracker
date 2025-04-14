import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import sampleExpenses from "./data/sampleExpenses"; // make sure this is usable

function App() {
  const [expenses, setExpenses] = useState(sampleExpenses);

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function handleDeleteExpense(id) {
    const updated = expenses.filter(exp => exp.id !== id);
    setExpenses(updated);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={expenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import sampleExpenses from "./data/sampleExpenses";

function App() {
  const [expenses, setExpenses] = useState(sampleExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  // Add a new expense to the state
  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  // Remove an expense by ID
  function handleDeleteExpense(id) {
    const updated = expenses.filter(exp => exp.id !== id);
    setExpenses(updated);
  }

  // Update searchTerm state when input changes
  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  // Filter expenses based on name or description
  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* SearchBar is controlled by App state */}
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {/* Form to add expenses */}
      <ExpenseForm onAddExpense={handleAddExpense} />

      {/* Table displaying only filtered expenses */}
      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;

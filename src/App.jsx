import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import sampleExpenses from "./data/sampleExpenses";

function App() {
  const [expenses, setExpenses] = useState(sampleExpenses);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(""); // sortBy can be 'description' or 'category'

  // Add a new expense to the state
  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  // Remove an expense by ID
  function handleDeleteExpense(id) {
    const updated = expenses.filter(exp => exp.id !== id);
    setExpenses(updated);
  }

  // Handle search bar input change
  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  // Handle sort option change
  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  // Filter based on search term
  let filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the filtered list if sortBy is selected
  if (sortBy === "description") {
    filteredExpenses.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "category") {
    filteredExpenses.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* Search bar to filter expenses by text */}
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {/* Dropdown menu to sort by category or description */}
      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
        </select>
      </div>

      {/* Form to add expenses */}
      <ExpenseForm onAddExpense={handleAddExpense} />

      {/* Table of filtered and sorted expenses */}
      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;

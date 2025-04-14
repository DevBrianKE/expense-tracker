import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  // Handles changes to any form input
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handles form submission
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload

    const newExpense = {
      ...formData,
      id: crypto.randomUUID(), // unique ID
      amount: parseFloat(formData.amount) // ensure amount is a number
    };

    onAddExpense(newExpense); // callback to App to add new expense
    setFormData({ name: "", description: "", category: "", amount: "", date: "" }); // reset form
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input
        type="text"
        name="name"
        placeholder="Enter expense name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Enter expense description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;

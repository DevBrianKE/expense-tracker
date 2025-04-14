import React from "react";

// Renders a table of expenses with delete functionality
function ExpenseTable({ expenses, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th> {/* Column for Delete Button */}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>${expense.amount}</td>
            <td>
              {/* Delete button triggers onDelete with expense id */}
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;

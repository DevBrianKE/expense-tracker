import React from "react";

// ExpenseTable component receives two props:
// - expenses: an array of expense objects to display
// - onDelete: a function to handle deleting an expense
function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          {/* Table headers for each property of an expense */}
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th> {/* Column for the delete button */}
        </tr>
      </thead>
      <tbody>
        {/* Loop through each expense in the expenses array */}
        {expenses.map((expense) => (
          <tr key={expense.id}>
            {/* Display the individual properties of each expense */}
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>
              {/* Delete button that calls onDelete with the expense's ID */}
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Export the component so it can be used in other parts of the app
export default ExpenseTable;

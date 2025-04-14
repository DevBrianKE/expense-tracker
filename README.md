# Expense Tracker

A simple React application that allows users to add, search, filter, and delete expenses. This project demonstrates basic state management, controlled forms, component composition, and conditional rendering using React.

## Live Demo

View the live application:  
[https://expensesestarckker.netlify.app/](https://expensesestarckker.netlify.app/)

## Features

- Add new expenses with a name, amount, and category
- Filter expenses by category
- Search expenses by name
- Delete expenses from the list
- Responsive layout for desktop and mobile

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DevBrianKE/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

```
src/
├── components/
│   ├── ExpenseForm.jsx
│   ├── ExpenseSearch.jsx
│   └── ExpenseTable.jsx
├── App.jsx
└── main.jsx
```

- `ExpenseForm`: Form for adding new expenses.
- `ExpenseSearch`: Input and dropdown to filter/search expenses.
- `ExpenseTable`: Table that displays the filtered list of expenses.
- `App.jsx`: Main application component.
- `main.jsx`: Entry point that renders the App.

## Usage

To test the functionality:

- Add an expense by filling out the form and clicking submit.
- Filter the list by selecting a category from the dropdown.
- Search for an expense by typing into the search field.
- Remove an expense using the delete button next to each item.

## Author

Kipchumba Brian  
GitHub: [@DevBrianKE](https://github.com/DevBrianKE)  
Portfolio: [https://devbrianke.github.io/My-Portfolio](https://devbrianke.github.io/My-Portfolio)


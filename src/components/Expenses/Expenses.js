import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const saveFilterYearHandler = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onSaveFilterYear={saveFilterYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

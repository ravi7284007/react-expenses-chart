import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import './Expense.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenseItems={filteredExpenses} />
        </div>
    )
}

export default Expense;
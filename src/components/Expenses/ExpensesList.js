import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = ({ expenseItems }) => {
    if (expenseItems.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense found.</h2>
    }
    return <ul className="expenses-list">
        {
            expenseItems.map(exp =>
                <ExpenseItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                />
            )
        }
    </ul>
}

export default ExpensesList;
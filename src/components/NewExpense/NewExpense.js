import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const hideExpenseFormHandler = (event) => {
        setShowForm(true)
    }
    const hideFormHandler = () => {
        setShowForm(false)
    }
    return (
        <div className="new-expense">
            {showForm && <ExpenseForm hideForm={hideFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
            {!showForm && <button type='button' onClick={hideExpenseFormHandler}>Add Expense</button>}

        </div >
    )
}
export default NewExpense;
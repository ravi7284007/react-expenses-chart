import { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [titleValue, setTitleValue] = useState('')
    const [amountValue, setAmountValue] = useState('')
    const [dateValue, setDateValue] = useState('')

    // const [userInput, setUserInput] = useState({
    //     setTitleValue: '',
    //     setAmountValue: '',
    //     setDateValue: '',
    // })
    const titleChangeHandler = (event) => {
        setTitleValue(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     setTitleValue: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, setTitleValue: event.target.value }
        // })
    }

    const amountChangeHandler = (event) => {
        setAmountValue(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     setAmountValue: event.target.value,
        // })

    }
    const dateChangeHandler = (event) => {
        setDateValue(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     setDateValue: event.target.value,
        // })

    }
    const submitHandler = (e) => {
        e.preventDefault()

        const expneseDate = {
            title: titleValue,
            amount: amountValue,
            date: new Date(dateValue),
        }
        props.onSaveExpenseData(expneseDate)
        setTitleValue('')
        setAmountValue('')
        setDateValue('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={titleValue} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={amountValue} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2020-01-01' max='2024-01-01' onChange={dateChangeHandler} value={dateValue} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.hideForm}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
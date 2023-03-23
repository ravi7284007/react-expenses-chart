import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date }) => {

    const [itemTitle, setItemTitle] = useState(title)

    const clickHandler = () => {
        setItemTitle('Ravi')
    }

    return (
        <li>
            <div className='expense-item' >
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{itemTitle}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
                <button onClick={clickHandler}>Click</button>
            </div>
        </li>
    )
}

export default ExpenseItem;
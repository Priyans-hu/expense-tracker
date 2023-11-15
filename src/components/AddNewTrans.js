import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddNewTrans(params) {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amt, setAmt] = useState(0);

    const FormSubmissionHandler = (e) => {
        e.preventDefault();
        const newTrans = {
            id: Math.floor(Math.random() * 100000),
            text: text, 
            amount: +amt
        };
        addTransaction(newTrans);
        setText('');
        setAmt('');
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={FormSubmissionHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder='Enter Title' onChange={(e) => setText(e.target.value)} value={text} required />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br /> 
                        <span> (Positive - Income, Negative - Expense) </span>
                    </label>
                    <input type="number" placeholder='Enter Amount' onChange={(e) => setAmt(e.target.value)} value={amt} required/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
};

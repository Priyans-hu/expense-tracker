import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction( { id, text, amount} ) {
    const { deleteTransaction } = useContext(GlobalContext)
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text}
            <span>{amount}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>
    )
};

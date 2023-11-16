import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.length > 0 ? (
                    transactions.map(transaction => (
                        <Transaction
                            key={transaction.id}
                            id={transaction.id}
                            text={transaction.text}
                            amount={transaction.amount}
                        />
                    ))
                ) : (
                    <p>No transactions till now</p>
                )}
            </ul>
        </div>
    );
}

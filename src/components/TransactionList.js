import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3 style={{color: "#f7f5dd"}}>History</h3>
      <h6 style={{color:'white', alignSelf:'center'}}>{transactions.length===0 ?'No History':''}</h6>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}

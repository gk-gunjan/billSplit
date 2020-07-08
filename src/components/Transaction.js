import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.totalAmount < 0 ? '-' : '+';

  return (
    <li className={transaction.totalAmount < 0 ? 'minus' : 'plus'}>
      <span style={{color:'white'}}>{sign}${Math.abs(transaction.totalAmount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      <span style={{color:'white'}}>{transaction.description}</span>

    </li>
  )
}

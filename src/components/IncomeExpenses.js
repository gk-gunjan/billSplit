import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const totalAmounts = transactions.map(transaction => transaction.totalAmount);


  const lend = totalAmounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const borrow = (
    totalAmounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4 style={{color: "white"}}>Lend</h4>
  <p className="money plus">{lend}</p>
        </div>
        <div>
          <h4 style={{color: "white"}}>Borrow</h4>
  <p className="money minus">{borrow}</p>


        </div>
      </div>
  )
}

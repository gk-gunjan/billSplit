import React, {useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Redirect } from 'react-router-dom';

export const AddTransaction = () => {
  let index =0;

  const [description, setDescription] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [inputFields, setInputFields] = useState([
    { individualAmount: '0'}
  ]);
  const { addTransaction } = useContext(GlobalContext);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
      values[index].individualAmount = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ individualAmount: ''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      inputFields,
      totalAmount: +totalAmount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 style={{color: "#f7f5dd"}}>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description" style={{color: "#f7f5dd"}}>Description</label>
          <input type="text" required='required' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="totalAmount"
           style={{color: "#f7f5dd"}} >Total Amount <br />
          </label>
          <input type="number" required='required' value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} placeholder="Enter total amount..." />
        </div>
        <div >
          <p  style={{color: "#f7f5dd"}}>Add or remove person</p>
                <button
                className={ index > 0 ? 'hidden' : 'visible' }
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                className={ index > 0 ? 'hidden' : 'visible' }
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <div key={`${inputField}~${index}`}>
              <div className="form-control">
          <label htmlFor="individualAmount"  min={totalAmount}  style={{color: "#f7f5dd"}}>Amount paid by person {index + 1}</label>
                <input
                  type="number" required='required' placeholder="Enter Amount Paid"
                  onChange={event => handleInputChange(index, event)}
                  value={inputField.individualAmount}
                />
              </div>               
            </div>
          ))}
        </div>
          <button onClick={<Redirect to="/transaction" />} className="btn">Add transaction</button>            
          <button onSubmit={<Redirect to="/transaction" /> }className="btn">Add</button>
          {/*new button to redirect to another page */}
      </form>      
    </>
  )
}

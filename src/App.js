import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";

import  {Header} from './components/Header';

import { IncomeExpenses}  from './components/IncomeExpenses';
import { TransactionList}  from './components/TransactionList';
import  {AddTransaction} from "./components/AddTransaction";
import { GlobalProvider } from './context/GlobalState';

import './App.css';
import pageNotFound from './components/pageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AddTransaction} />
        <GlobalProvider>
        <Header />
      <div className="container">
        <IncomeExpenses />
        <Route exact path="/transaction" component={TransactionList} />
      </div>
    </GlobalProvider>
    <Route exact path="*" component={pageNotFound} />
    </Switch>
    </Router>
  );
}

export default App;

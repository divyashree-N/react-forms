import './App.css';
import React from 'react'
import Content from './component/Container';
import BankDetails from './component/BankDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Content />
        </Route>

        <Switch>
          <Route path='/bankdetails'>
            <div className="form-box bank-box">
              <BankDetails />
            </div>
          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;


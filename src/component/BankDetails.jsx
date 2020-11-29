import React, { Component } from 'react';
import Currency from '../currency.json';
import { Link } from 'react-router-dom'


export default class BankDetails extends Component {

    constructor() {
        super();
        this.findValue = this.findValue.bind(this);
        this.state = {
            optionSelected: '',
        }
    }


    findCurrency = () => {
        const currency = Currency;
        let currencyValue;
        currency.forEach(currencies => {
            if (currencies.name === this.state.optionSelected) {
                currencyValue = currencies.currency;
            }
        });
        console.log('currency', currencyValue);
        return currencyValue;
    }

    findValue = (e) => {
        // console.log('value clicked',e.target.value);
        // console.log('currency',this.state.currencyValue);
        this.setState({ optionSelected: e.target.value });

    }

    displayValues = () => {
        const currency = Currency;
        let mapRow = currency.map(currencies => (
            <React.Fragment key={currencies.id}>

                <option>{currencies.name}</option>
            </React.Fragment>
        ));
        return mapRow;
    }

    render() {
        console.log('value clicked', this.state.optionSelected);
        return (
            <div>
                <form className="bank-details">
                    <label>Country</label>
                    <select onChange={this.findValue}><option hidden>Choose Country</option>{this.displayValues()}</select>
                    <label>Currency:    {this.findCurrency()}</label>
                    <input type="text" placeholder="Enter Account Number" />
                    <button className="bank-button1"><Link to='/'>PREVIOUS</Link></button>
                    <button className="bank-button2">NEXT</button>


                </form>
            </div>
        )
    }
}
import React from 'react';
import styled from 'styled-components';
import './App.css'
import Titles from './components/Titles';
import Form from './components/Form';
import Loan from './components/Loan';


const Styles = styled.div``;

export default class App extends React.Component {

  //states are undefined so that nothing is displayed before clicking the submit button
  state = {
    monthlyAmount: undefined,
    interest: undefined,
    error: undefined
  }

  getLoan = async (e) => {
    e.preventDefault(); //To prevent the total refreshing of the page
    const Amount = e.target.elements.amount.value;
    const months = e.target.elements.months.value;
    const api_call = await fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${Amount}&numMonths=${months}`);
    const data = await api_call.json();

    //If the entered values are true then the info fetched is displayed or the error message 
    if (Amount && months) {
      this.setState({
        monthlyAmount: data.monthlyPayment.amount,
        interest: data.interestRate,
        error: ""
      });
    } else {
      this.setState({
        monthlyAmount: undefined,
        interest: undefined,
        error: "Please enter the values"
      });
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <Styles >
              <Titles />
              <Form getLoan={this.getLoan} />
              <Loan
                monthlyAmount={this.state.monthlyAmount}
                interest={this.state.interest}
                error={this.state.error}
              />
            </Styles>
          </div>
        </div>
      </div>
    );
  }
}
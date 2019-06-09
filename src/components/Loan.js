import React from 'react';

export default class Loan extends React.Component {
    render() {
        return (
            //accessing the props given to the Loan component in App.js
            <div>
                {this.props.monthlyAmount && <p>Amount to be paid monthly:{this.props.monthlyAmount}</p>}
                {this.props.interest && <p>Rate of interest: {this.props.interest}</p>}
                {this.props.error && <p> {this.props.error}</p>}
            </div>
        );
    }
}
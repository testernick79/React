import React from 'react';
import ReactDOM from 'react-dom';


// -- CLASS BASED COMPONENT --
/* const App = props => {
  return (
    <div>
      <Hello name="Nikki" />
      <Hello name="Michael" />
      <Hello name="Andrew" />
    </div>
  );
};

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
} */

// -- COMPONENT STATE --

/* const App = props => {
    return (
        <div>
            <BankAccount />
        </div>
    )
}

class BankAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savingsAccount: {
            accountBalance: 25.00
            },
            checkingAccount: {
                accountBalance: 5334.00
            }
        };
    }
    render() {
        return (
            <div>
                <h1>-- Statement of Accounts --</h1>
                <h3>Savings Account Balance: {this.state.savingsAccount.accountBalance} </h3>
                <h3>Checking Account Balance: {this.state.checkingAccount.accountBalance} </h3>
            </div>
        )
    }
} */

// -- SET STATE METHOD --
/* class Text extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'hello'
        }
    }

    update(event){
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.text}</h1>
            </div>
        )
    }
} */

// -- COMPONENT STATE --
class BankAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountBalance: 1222.22,
            addAmount: ""
        };
    }
    increment() {
        this.setState({ accountBalance: this.state.accountBalance + parseInt(this.state.addAmount) })
    }
    render() {
        return (
            <div>
                <h3>Account Balance: {this.state.accountBalance}</h3>
                <input type="number"
                    onChange ={event => this.setState({addAmount: parseInt(event.target.value) })}
                    value = {this.state.setAmount} />
                <button onClick = {this.increment.bind(this)}>Add More</button> 
            </div>
        )
    } 
}

ReactDOM.render(<BankAccount />, 

document.getElementById('root'));
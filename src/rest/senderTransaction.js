import React from 'react';
import { RestServiceApi } from "./restService";

export class SenderTransaction extends React.Component {

    constructor(props){
        super(props);
        var allAccounts = new RestServiceApi().getAllAccounts();
        console.log(allAccounts);
        this.state = {
            listAccounts : allAccounts,
            selectedAccount : '',
            amount: 0,
        };
        this.handleAccount = this.handleAccount.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleAccount(action){
        this.setState({selectedAccount: action.target.value});
    }

    handleAmount(action){
        this.setState({amount: action.target.value});
    }

    onSubmit(){
        new RestServiceApi().sendTransaction(this.state.selectedAccount, this.state.amount);
    }

    generaSelectTag(){
        return (
            <div class="col-sm-10">
                <select class="form-control" onChange={this.handleAccount} value={this.state.selectedAccount}>
                    <option id={-1}>Select account</option>
                    {this.state.listAccounts.map( (row, index) => (
                        <option id={index}>{row}</option>
                    ))}
                </select>          
            </div>
        );
    }

    render(){

        return (
            <div>
                <h1 className="text-white">Transaction sender</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="text-white m-6 col-sm-2 col-form-label">Accounts</label>
                        {this.generaSelectTag()}
                    </div>
                    <div className="form-group">
                        <label className="text-white m-6 col-sm-2 col-form-label">Amount ETH</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="amount" value={this.state.amount} onChange={this.handleAmount}/>
                        </div>
                    </div>
                    <div className="form-group"> 
                        <button type="submit" class="btn btn-primary">Send Transaction</button>
                    </div>
                </form>
            </div>
        );
    }
}
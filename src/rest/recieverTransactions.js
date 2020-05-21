import React from 'react';
import { RestServiceApi } from "./restService";

export class RecieverTransaction extends React.Component {

    render(){
        let parpams = new URLSearchParams(this.props.location.search);
        let type = parpams.get("type");
        console.log("Type tx: ", type);

        var title;
        if(type === "SEND"){
            title = "Sended files";
        }else{
            title = "Recived files";
        }

        let allTransactions = new RestServiceApi().getAllTransactions(type);
        
        console.log("Result get all trxs: ", JSON.stringify(allTransactions));
        let tableData = null;
        tableData = <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Recipient</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Block number</th>
                    <th scope="col">Hash</th>
                </tr>
            </thead>
            <tbody>
                {allTransactions.map( (row, index) => (
                    <tr key={index}>
                        <th scope="col">{index + 1}</th>
                        <th scope="col">{row.sender}</th>
                        <th scope="col">{row.recipient}</th>
                        <th scope="col">{row.amount}</th>
                        <th scope="col">{row.blockNumber}</th>
                        <th scope="col">{row.trxHash}</th>
                    </tr>
                ))}
            </tbody>
        </table>
        console.log(tableData);

        return (
            <div className="col">
                <h1>
                    {title}
                </h1>
                {tableData}
            </div>
        );
    }
}
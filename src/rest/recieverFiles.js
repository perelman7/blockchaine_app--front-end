import React from 'react';
import { RestServiceApi } from "./restService";

export class RecieverFiles extends React.Component {

    render(){
        let parpams = new URLSearchParams(this.props.location.search);
        let type = parpams.get("type");
        console.log("Type tx: ", type);

        var title;
        if(type === "SEND"){
            title = "Sended transactions";
        }else{
            title = "Recived transactions";
        }

        let allFiles = new RestServiceApi().getAllFiles(type);
        
        console.log("Result get all trxs: ", JSON.stringify(allFiles));
        let tableData = null;
        tableData = <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Filename</th>
                    <th scope="col">Filepath</th>
                    <th scope="col">Extension</th>
                    <th scope="col">Description</th>
                    <th scope="col">Recipient</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Data</th>
                </tr>
            </thead>
            <tbody>
                {allFiles.map( (row, index) => (
                    <tr key={index}>
                        <th scope="col">{index + 1}</th>
                        <th scope="col">{row.filename}</th>
                        <th scope="col">{row.filepath}</th>
                        <th scope="col">{row.extension}</th>
                        <th scope="col">{row.description}</th>
                        <th scope="col">{row.recipient}</th>
                        <th scope="col">{row.sender}</th>
                        <th scope="col">{row.data}</th>
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
import React from 'react';
import { RestServiceApi } from "./restService";
import axios from 'axios';

export class RecieverFiles extends React.Component {

    constructor(props){
        super(props);
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
        
        this.state = {
            typeValue : type,
            listFiles : allFiles,
            titleValue : title,
            filename: '',
            filecontent: null,
            fileExtension: ''
        }

    }

    handleDownload(index){
        var contract = this.state.listFiles[index];
        var url = "http://localhost:8080/ipfs/" + contract.filepath;
        var jwt = window.sessionStorage.getItem("jwt");
        axios({
            url: url,
            method: "GET",
            responseType: "blob",

        }).then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');

            link.href = url;
            link.setAttribute('download', contract.filename);
            document.body.appendChild(link);
            link.click();
        })
    }

    render(){
        console.log("Result get all files: ", JSON.stringify(this.state.listFiles));
        let tableData = null;
        tableData = <table className="table table-secondary">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Filename</th>
                    <th scope="col">Description</th>
                    {this.state.typeValue === 'SEND' ? <th scope="col">Recipient</th> : <th scope="col">Sender</th>}
                    <th scope="col">Data</th>
                </tr>
            </thead>
            <tbody>
                {this.state.listFiles.map( (row, index) => (
                    <tr key={index}>
                        <th scope="col">{index + 1}</th>
                        <th scope="col" className="d-flex justify-content-between">{row.filename} <button className="btn btn-light ml-2" onClick={() => this.handleDownload(index)}><i className='fas fa-cloud-download-alt'></i></button></th>
                        <th scope="col">{row.description}</th>
                        {this.state.typeValue === 'SEND' ? <th scope="col">{row.recipient}</th> : <th scope="col">{row.sender}</th>}
                        <th scope="col">{row.data}</th>
                    </tr>
                ))}
            </tbody>
        </table>
        console.log(tableData);

        return (
            <div className="col">
                <h1 className="text-white">
                    {this.state.titleValue}
                </h1>
                {tableData}
            </div>
        );
    }
}
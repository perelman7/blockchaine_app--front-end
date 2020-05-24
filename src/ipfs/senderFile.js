import React from 'react';
import ipfs from './ipfs';
import { RestServiceApi } from "../rest/restService";

export class SenderFile extends React.Component {

    constructor(props) {
        super(props)
        var allAccounts = new RestServiceApi().getAllAccounts();

        this.state = {
          content: null,
          filename: '',
          fileType: '',
          listAccounts : allAccounts,
          selectedAccount : '',
          description: '',
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleAccount = this.handleAccount.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      handleAccount(action){
        this.setState({selectedAccount: action.target.value});
      }

      handleDescription(action){
        this.setState({description: action.target.value});
      }
    
      handleFile(event) {
        const file = event.target.files[0];
        console.log("File: ", file.name, file.type);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          this.setState({ 
            content: Buffer(reader.result),
            filename: file.name,
            fileType: file.type
          });
        }
      }
    
      onSubmit(event) {
        event.preventDefault();
        ipfs.add(this.state.content).next().then((res) => {
          console.log(res.value.path);
          var filePath = res.value.path;
          new RestServiceApi().sendFile(this.state.filename, this.state.fileType, filePath, this.state.description, this.state.selectedAccount);
        });
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
    
      render() {
        return (

            <div className="col-sm">
              <div className="App">
                <main className="container">
                  <div className="pure-g">
                    <div className="pure-u-1-1">
                      
                      <h2 className="text-white">Upload File</h2>
                      
                      <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label className="text-white m-6 col-sm-2 col-form-label">Accounts</label>
                            {this.generaSelectTag()}
                        </div>
                        <div className="form-group">
                          <label for="description" className="text-white m-6 col-sm-2 col-form-label">Description</label>
                          <div class="col-sm-10">
                            <input type="text" className="form-control" id="description" placeholder="Description" value={this.state.description} onChange={this.handleDescription}/>
                          </div>
                        </div>
                        <div class="col-sm-10">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                              <input type="file" className="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01" onChange={this.handleFile}/>
                              <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                          </div>
                        </div>
                        <div class="form-check mt-2">
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </form>

                    </div>
                  </div>
                </main>
              </div>
            </div>
        );
      }
}
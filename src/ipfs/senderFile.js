import React from 'react';
import ipfs from './ipfs'

export class SenderFile extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          ipfsHash: '',
          buffer: null,
        }
        this.captureFile = this.captureFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      captureFile(event) {
        event.preventDefault();
        const file = event.target.files[0];
        console.log("File: ", file.name, file.type);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          this.setState({ buffer: Buffer(reader.result) });
          console.log('buffer', this.state.buffer);
        }
      }
    
      onSubmit(event) {
        console.log("Submit ...")
        event.preventDefault()
        ipfs.add(this.state.buffer).next().then((res) => {
          console.log(res.value.path);
          this.setState({ipfsHash: res.value.path});
        });
      }
    
      render() {
        return (

            <div className="col-sm">
              <div className="App">
                <nav className="navbar pure-menu pure-menu-horizontal">
                  <h1>IPFS File Upload DApp</h1>
                </nav>
        
                <main className="container">
                  <div className="pure-g">
                    <div className="pure-u-1-1">
                      <h1>Your Image</h1>
                      <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
                      {/* <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""/> */}
                      <img src={`http://localhost:8080/ipfs/${this.state.ipfsHash}`} alt=""/>
                      <span className="border border-primary">
                      <h2>Upload Image</h2>
                      
                      <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                          <label for="recipient_address">Recipient address</label>
                          <input type="text" className="form-control" id="recipient_address" placeholder="Enter recipient address"/>
                        </div>
                        <div className="form-group">
                          <label for="description">Description</label>
                          <input type="text" className="form-control" id="description" placeholder="Description"/>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                          </div>
                          <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01" onChange={this.captureFile}/>
                            <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                          </div>
                        </div>
                        <div class="form-check mt-2">
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </form>
                      </span>
                    </div>
                  </div>
                </main>
              </div>
            </div>
        );
      }
}
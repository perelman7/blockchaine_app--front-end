import React from 'react';
import axios from 'axios';

export class RestServiceApi extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>
            send get request
          </button>
          <button onClick={this.handlePost}>
              send post request
          </button>
        </div>
      );
    }

    handleClick(){
        console.log('Send get request')
        axios.get('http://localhost:8080/api/getting')
        .then(function(response) {
            console.log('Status: ' + response.status + ', data: ' + response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    
    handlePost(){
        console.log('Send post request')

        axios.post('http://localhost:8080/api/post')
        .then(function(response) {
            console.log('Status: ' + response.status + ', data: ' + response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    }
  }
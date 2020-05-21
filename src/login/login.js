import React, { Component } from 'react';
import { RestServiceApi } from "../rest/restService";

export class Login extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          username: '',
          password: '',
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event){
        console.log('User: ', event.target.value)
        this.setState({username: event.target.value});
    }

    handlePassword(event){
        console.log('Pass: ', event.target.value)
        this.setState({password: event.target.value});
    }

    handleSubmit(){
        //todo send request
        var restService = new RestServiceApi();
        var jwt = restService.loginRequest(this.state.username, this.state.password);
        window.sessionStorage.setItem("jwt", jwt);
    }

  render() {
      return (
          
              <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="u" value={this.state.username} placeholder="Username" required="required" onChange={this.handleUsername}/>
                        <input type="password" name="p" value={this.state.password} placeholder="Password" required="required" onChange={this.handlePassword} />
                        <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                    </form>
                </div>
          
      );
  }
}
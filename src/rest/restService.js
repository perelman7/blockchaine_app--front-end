import { JwtParserService } from "../jwtParser/jwtParser";
import axios from "axios";

export class RestServiceApi{

    getAllTransactions(type){
        this.init();
        console.log('Send get request');
        let url = "http://localhost:8015/block/all?privateKey=" + this.privateKey  + "&typeRequest=" + type;
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.setRequestHeader('Authorization', this.jwtHeader);
        xhr.setRequestHeader('Access-Control-Allow-Origin', "*")
        xhr.setRequestHeader('Access-Control-Allow-Methods', "*")
        xhr.setRequestHeader('Access-Control-Allow-Headers', "*")
        xhr.setRequestHeader('Cross-Origin-Allow-Credentials', 'True');
        
        console.log(xhr.requestHeaders);
        xhr.send();
        if(xhr.status === 200){
            return JSON.parse(xhr.response).transactions;
        }else{
            alert("Status : " + xhr.status)
            return [];
        }
    }
    
    getAllFiles(type){
        this.init();
        console.log('Send post request');
        let url = "http://localhost:8015/block/all?privateKey="+ this.privateKey + "&typeRequest=" + type;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.setRequestHeader('Authorization', this.jwtHeader);
        xhr.send();
        if(xhr.status === 200){
            return JSON.parse(xhr.response).contracts;
        }else{
            alert("Status : " + xhr.status)
            return [];
        }
    }

    loginRequest(username, password){
        let url = "http://localhost:8015/auth/log-in";
        var body = {
            accountAddress: username,
            password: password
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));
        alert(xhr.response);
        if(xhr.status === 200){
            return xhr.response;
        }else{
            console.log("Status: " + xhr.status);
            return [];
        }
    }

    init(){
        var jwt = window.sessionStorage.getItem("jwt");
        this.privateKey = new JwtParserService().parsePrivateKey(jwt);
        this.jwtHeader = "Bearer " + jwt;
    }
  }
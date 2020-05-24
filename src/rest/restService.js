import { JwtParserService } from "../jwtParser/jwtParser";

export class RestServiceApi{

    getAllTransactions(type){
        this.init();
        let url = "http://localhost:8015/block/all?privateKey=" + this.privateKey  + "&typeRequest=" + type;
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        this.initHeaders(xhr);
        xhr.send();
        if(xhr.status === 200){
            return JSON.parse(xhr.response).transactions;
        }else{
            console.log("Status : " + xhr.status);
            return [];
        }
    }
    
    getAllFiles(type){
        this.init();
        let url = "http://localhost:8015/block/all?privateKey="+ this.privateKey + "&typeRequest=" + type;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        this.initHeaders(xhr);
        xhr.send();
        if(xhr.status === 200){
            return JSON.parse(xhr.response).contracts;
        }else{
            console.log("Status : " + xhr.status);
            return [];
        }
    }

    getAllAccounts(){
        this.init();
        let url = "http://localhost:8015/web3/wallet/accounts";

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        this.initHeaders(xhr);
        xhr.send();
        if(xhr.status === 200){
            return JSON.parse(xhr.response);
        }else{
            console.log("Status : " + xhr.status);
            return [];
        }
    }

    sendTransaction(account, amount){
        this.init();
        let url = "http://localhost:8015/transaction/send";
        let body = {
            privateKeySender: this.privateKey,
            accountRecipient: account,
            amount: amount
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, false);
        this.initHeaders(xhr);
        xhr.send(JSON.stringify(body));
        console.log("Status : " + xhr.status);
    }

    sendFile(fileName, fileType, filePath, desc, recipient){
        this.init();
        let url = "http://localhost:8015/contract/deploy";
        let body = {
            privateKey: this.privateKey,
            description: desc,
            recipient: recipient,
            fileInfo: {
                name: fileName,
                path: filePath,
                extension: fileType
            }
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, false);
        this.initHeaders(xhr);
        xhr.send(JSON.stringify(body));
        console.log("Status : " + xhr.status);
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

    initHeaders(xhr){
        xhr.setRequestHeader('Authorization', this.jwtHeader);
        xhr.setRequestHeader('Access-Control-Allow-Origin', "*")
        xhr.setRequestHeader('Access-Control-Allow-Methods', "*")
        xhr.setRequestHeader('Access-Control-Allow-Headers', "*")
        xhr.setRequestHeader('Cross-Origin-Allow-Credentials', 'True');
        xhr.setRequestHeader('Content-Type', 'application/json');
    }
  }
import "jwt-decode";

export class JwtParserService {

    parse(jwt){
        var jwtDecode = require('jwt-decode');
        var decodedJwt = jwtDecode(jwt);
        return decodedJwt;
    }

    parsePrivateKey(jwt){
        var parsedJwt = this.parse(jwt);
        return parsedJwt.privateKey;
    }

    parsePublicKey(jwt){
        var parsedJwt = this.parse(jwt);
        return parsedJwt.publicKey;
    }

    parseAccountAddress(jwt){
        var parsedJwt = this.parse(jwt);
        return parsedJwt.accountAddress;
    }
}
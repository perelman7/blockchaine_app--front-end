import React, { Component } from 'react';
import { JwtParserService } from "../../jwtParser/jwtParser";

export class UserInfo extends Component {
    
    render(){
        var jwt = window.sessionStorage.getItem("jwt");
        var parser = new JwtParserService();
        var accountAddress = parser.parseAccountAddress(jwt);
        var privateKey = parser.parsePrivateKey(jwt);
        var publicKey = parser.parsePublicKey(jwt);

        var subAccount = accountAddress.substring(0, 7) + "...";
        var subPubKey = publicKey.substring(0, 7) + "...";
        var subPrivKey = privateKey.substring(0, 7) + "...";
        return(
                <div className="sidebar-header">
                    <div className="user-pic">
                        <img className="img-responsive img-rounded"  src={require('../../images/user_icon.jpg')} alt="User icon"/>
                    </div>
                    
                    <div className="user-info">
                        <span className="user-name" data-toggle="tooltip" data-placement="right" title={accountAddress}>
                            Account: {subAccount}
                        </span>
                        <span className="user-name" data-toggle="tooltip" data-placement="right" title={publicKey}>
                            Public: {subPubKey}
                        </span>
                        <span className="user-name" data-toggle="tooltip" data-placement="right" title={privateKey}>
                            Private: {subPrivKey}
                        </span>
                        <span className="user-role">User</span>
                        <span className="user-status">
                            <i className="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
        );
    }
}
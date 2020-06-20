import React, { Component } from 'react';
import Customer from "./LoginPageComponents/Customer"
import SignUp from "./LoginPageComponents/SignUp"

export default class LoginPageContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            defaultLog: true,
        }
    }

    signupbutton = () => {
        alert("clicked");
        this.setState({defaultLog: false});

    }

    render() {
        const { defaultLog } = this.state;

        return (
            <>  
    
                { defaultLog && <div><Customer/>
                <button onClick={()=>this.signupbutton()}>Sign Up</button></div>
                }
                { !defaultLog && <SignUp />}

            </>
        )
    }
}

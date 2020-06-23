import React, { Component } from 'react'
import Pending from "./LoginPageComponents/Pending";
import Completed from "./LoginPageComponents/Completed";
import Cookies from 'js-cookie';
import AuthApi from "../../app/AuthApi"

export default class EmployeeLoginContainer extends Component {

    static contextType = AuthApi

    constructor(props){
        super(props);
    }
    logout = () =>{

        const context = this.context;
        context.setAuth(false);
        Cookies.remove("user");

    }
    render() {
        return (
            <div>
                    Employee
                    <button onClick={this.logout}>Logout</button>
                    {/* <Pending title='Pending Orders' />
                    <Completed title='Completed Orders' /> */}
                    {/* <button onClick={() => this.props.logStatus}>Log Out</button> */}
            </div>
        )
    }
}



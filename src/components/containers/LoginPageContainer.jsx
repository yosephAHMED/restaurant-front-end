import React, { Component, useContext } from 'react';
import axios from "axios";
import Pending from "./LoginPageComponents/Pending.jsx"
import Completed from "./LoginPageComponents/Completed.jsx"
import Customer from './LoginPageComponents/Customer.jsx';
import CustomerA from './LoginPageComponents/CustomerA.jsx';

import {useSelector, useDispatch, connect} from 'react-redux';
import AuthApi from '../../app/AuthApi.js';
import Cookies from 'js-cookie';
// import { logStatus } from '../../app/actions/index.js';


    
class LoginPageContainer extends Component {

    static contextType = AuthApi

    constructor(props){
        super(props);

        this.state = {
            start:true,
            showEmp:false,
            showCus:false

       
        }
    }

    validLogin = () =>{
        const auth = this.context;
        
        auth.setAuth(true);
        Cookies.set('user', 'loginTrue')
    }

    emp = () =>{
        this.setState({start:false, showEmp:true})
        //alert(this.props.c(true))
        alert(this.props.ca)


        
    }
    cust = () =>{
        this.setState({start:false,showCus:true})
        alert(this.props.e)

    }
  

    render() {

        return (
            <>  
            {   
            this.props.ca ?
            (
            <div>
            <button onClick={this.emp} style={{marginTop:'25%', marginLeft: '50%', transform:'translateX(-100%)'}}>Employee</button>
            <button onClick={this.cust} style={{transform:'translateX(-100%)'}}>Customer</button>
            </div>
            )
            :
            (
                <div>
                {(this.state.showEmp &&
                <div>
                    <Customer login={this.validLogin}/>
                    <button style={{marginTop:'25%', marginLeft: '50%', transform:'translateX(-50%)'}}> Emp Sign Up </button>
                </div>)
                    }{
                (this.state.showCus &&
                <div>
                    <CustomerA login={this.validLogin}/>
                    <button style={{marginTop:'25%', marginLeft: '50%', transform:'translateX(-50%)'}}> Cust Sign Up </button>
                </div>)
                }
                </div>
            )
            }

            </>
        )
    }
}

function mapStateToProps(state) {
    const logged = state.logged;
    return {logged};
}

// function mapDispatchToProps(dispatch){
//     return {
//       logStatus: () => dispatch(logStatus()),
//       dispatch
//     }
//   }

export default connect(mapStateToProps)(LoginPageContainer);

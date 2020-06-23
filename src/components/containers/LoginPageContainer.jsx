import React, { Component, useContext } from 'react';
import axios from "axios";
import Pending from "./LoginPageComponents/Pending.jsx"
import Completed from "./LoginPageComponents/Completed.jsx"
import Customer from './LoginPageComponents/Customer.jsx';
import {useSelector, useDispatch, connect} from 'react-redux';
import AuthApi from '../../app/AuthApi.js';
import Cookies from 'js-cookie';
// import { logStatus } from '../../app/actions/index.js';


    
class LoginPageContainer extends Component {

    static contextType = AuthApi

    constructor(props){
        super(props);

        this.state = {
       
        }
    }

    validLogin = () =>{
        const auth = this.context;
        
        auth.setAuth(true);
        Cookies.set('user', 'loginTrue')
    }
  

    render() {

        return (
            <>  
            {   

                <div>
                    <Customer login={this.validLogin}/>
                    <button> Sign Up </button>

                </div>

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

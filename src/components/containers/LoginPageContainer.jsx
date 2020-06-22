import React, { Component } from 'react';
import axios from "axios";
import Pending from "./LoginPageComponents/Pending.jsx"
import Completed from "./LoginPageComponents/Completed.jsx"
import Customer from './LoginPageComponents/Customer.jsx';
import {useSelector, useDispatch, connect} from 'react-redux';
import { logStatus } from '../../app/actions/index.js';


    

class LoginPageContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            arr: [],
            arr2: []
        }
    }

    componentDidMount(){
        
    }

    login = () => {
        
        this.getOrders();
    }

    getOrders = () =>{

        axios.get("http://localhost:3001/pendingorders").then((res) => {
            let temp = [];
            (res.data).forEach(e => {
                temp.push(e);
            });
            this.setState({arr: temp});
        }).catch((err)=>{console.log(err)})

        axios.get("http://localhost:3001/completedorders").then((res) => {
            let temp = [];
            (res.data).forEach(e => {
                temp.push(e);
            });
            this.setState({arr2: temp});
        }).catch((err)=>{console.log(err)})

    }

    render() {
        const {arr, arr2} = this.state;

        return (
            <>  
            {   !this.props.logged &&
                <div>
                <Customer login={this.login}/>
                <button> Sign Up </button>
                </div>
            }

            {   this.props.logged &&
                <div>
                    <Pending title='Pending Orders' map={arr}/>
                    <Completed title='Completed Orders' map={arr2}/>
                    <button onClick={() => this.props.logStatus}>Log Out</button>
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

function mapDispatchToProps(dispatch){
    return {
      logStatus: () => dispatch(logStatus()),
      dispatch
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
// export default (LoginPageContainer);
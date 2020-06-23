import React, { Component } from 'react'
import Pending from "./LoginPageComponents/Pending";
import Completed from "./LoginPageComponents/Completed";
import Cookies from 'js-cookie';
import AuthApi from "../../app/AuthApi"
import axios from "axios"

export default class EmployeeLoginContainer extends Component {

    static contextType = AuthApi

    constructor(props){
        super(props);
        this.state = {
            arr1 : [],
            arr2 : [],
            setttt : true
        }
    }
    logout = () =>{

        const context = this.context;
        context.setAuth(false);
        Cookies.remove("user");

    }
    componentDidMount(){
        this.getOrders();
    }

    reset = () => {

        this.getOrders();
    }


    getOrders = () => {
        var check = [];
        axios.get("http://localhost:3001/pendingorders").then((res) => {
            let temp = [];
            (res.data).forEach(e => {
                let tem = e;
                // let jsnobject = JSON.stringify(e.orderitems);
                tem.orderitems = JSON.parse(e.orderitems)
                console.log(tem)
                temp.push(tem);
            });
            this.setState({arr1: temp});
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
        const{arr1,arr2, setttt} = this.state;
        return (
            <div className="employeeLog">
                    
                    <Pending title='Pending Orders' map={arr1} getorder={this.reset}/>
                    <Completed title='Completed Orders' map={arr2} getorder={this.reset} but={setttt}/> 
                    <button onClick={this.logout}>Logout</button>

                    {/* <button onClick={() => this.props.logStatus}>Log Out</button>*/}
            </div>
        )
    }
}



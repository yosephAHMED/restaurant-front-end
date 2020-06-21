import React, { Component } from 'react';
import axios from "axios";
import Pending from "./LoginPageComponents/Pending.jsx"
import Completed from "./LoginPageComponents/Completed.jsx"

export default class LoginPageContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            defaultLog: true,
            arr: [],
            arr2: []
        }
    }

    componentDidMount(){
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

    signupbutton = () => {
        alert("clicked");
        this.setState({defaultLog: false});

    }

    render() {
        const { defaultLog, arr, arr2} = this.state;

        return (
            <>  
                <Pending title='Pending Orders' map={arr}/>
                <Completed title='Completed Orders' map={arr2}/>
            </>
        )
    }
}

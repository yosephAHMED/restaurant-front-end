import React, { Component } from 'react';
import Customer from "./LoginPageComponents/Customer";
import SignUp from "./LoginPageComponents/SignUp";
import axios from "axios"
export default class LoginPageContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            defaultLog: true,
            arr: []
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
    }

    signupbutton = () => {
        alert("clicked");
        this.setState({defaultLog: false});

    }

    render() {
        const { defaultLog, arr} = this.state;

        return (
            <>  
                <h3>Pending Orders</h3>
                {
                    arr.map((val,k)=>(
                        <div>{val.orderid} &emsp; {val.username} &emsp; {val.price}</div>
                    ))
                }

                {/* { defaultLog && <div><Customer/>
                <button onClick={()=>this.signupbutton()}>Sign Up</button></div>
                }
                { !defaultLog && <SignUp />} */}

            </>
        )
    }
}

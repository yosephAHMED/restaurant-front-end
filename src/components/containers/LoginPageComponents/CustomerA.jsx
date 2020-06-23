import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logStatus} from "../../../app/actions";
import axios from "axios";


export default function Customer(props) {


    const logged = useSelector(state => state.logged);
    const dispatch = useDispatch();
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');


    const dis = () => {
        console.log(logged);
        dispatch(logStatus());
        console.log(user);
        let url ='http://localhost:3001/user';
        axios.post(url, { username: user, password: pass}).then(res=>{
            if(res.data.length === 1){
                props.login();
            }
        }).catch((err)=>console.log(err))
  
    }

    const hand1 = (event) =>{
        setUser(event.target.value);
    }
    const hand2 = (e) =>{

        setPass(e.target.value);

    }

    return (
        <div>
            {/* <form action=""> */}
                <input type="text" style={{marginTop:'8em'}}value={user} onChange={(event)=>hand1(event)}/><br/>
                <input type="password" value={pass} onChange={(event)=>hand2(event)}/>
                <button onClick={dis} >Log In</button>
                {/* {logged ? <h1> logged </h1> : <h1> not logged </h1>} */}
            {/* </form> */}
        </div>
    )
}

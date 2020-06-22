import React from 'react';
import Display from "./Display";
import {useSelector, useDispatch} from 'react-redux';

    

export default function Pending(props) {

    const logged = useSelector(state => state.logged);
    
    return (
        <div>
            {logged ? <h1> logged </h1> : <h1> not logged </h1>}

            <h4>{props.title}</h4>
            <Display map={props.map}/>
        </div>
    )
}

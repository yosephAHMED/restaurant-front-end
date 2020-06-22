import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logStatus} from "/Users/GregoryRoss1/Desktop/TTP/restaurant-front-end/src/app/actions"


export default function Customer(props) {


    const logged = useSelector(state => state.logged);
    const dispatch = useDispatch();

    const dis = () => {
        console.log(logged);
        dispatch(logStatus());

        props.login();
    }

    return (
        <div>
            {/* <form action=""> */}
                <input type="text"/>
                <input type="text"/>
                <button onClick={dis}>Log In</button>
                {/* {logged ? <h1> logged </h1> : <h1> not logged </h1>} */}
            {/* </form> */}
        </div>
    )
}

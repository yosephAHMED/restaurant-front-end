import React from 'react';
import Display from "./Display";

export default function Pending(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <Display map={props.map}/>
        </div>
    )
}

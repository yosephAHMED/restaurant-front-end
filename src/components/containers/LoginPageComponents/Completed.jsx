import React from 'react';
import Display from "./Display"


export default function Completed(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <Display map={props.map} getorder={props.getorder}/>
        </div>
    )
}

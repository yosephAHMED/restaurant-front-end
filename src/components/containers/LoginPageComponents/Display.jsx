import React from 'react'

export default function Display(props) {

    return (
        <div>
            {
                (props.map).map((val,k)=>(
                    <div>{val.orderid} &emsp; {val.username} &emsp; {val.price}</div>
                ))
            }        
        </div>
    )
}

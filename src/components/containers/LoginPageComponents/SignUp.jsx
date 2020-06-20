import React from 'react'

export default function SignUp(props) {
    return (
        <div>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <button onClick={props.signupbutton}>Log In</button>
        </div>
    )
}

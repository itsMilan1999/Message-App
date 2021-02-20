import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import {auth , provider} from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes} from "./reducer"

function Login() {
const [state , dispathc] = useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result);
            dispathc({
                type: actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error)=>{
            alert(error.message);
        })
    }
    return (
        <div className="login">

            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />

                <h1>Sign in to Slack Messanger</h1>
                <p>RootSolution.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login

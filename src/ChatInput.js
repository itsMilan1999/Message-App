import React, { useState } from 'react';
import "./ChatInput.css"
import db from './firebase';
import firebase from "firebase"
import { useStateValue } from './StateProvider';


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
console.log("CHANELID",channelId)

    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {
            console.log("########IN IF######")
            db.collection('rooms').doc(channelId).collection('messages').add({
                
              
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            
            })
        }else{console.log("&&&&&&&&&&")}
    }
    return (
        
        <div className="chatInput">
            <form>

                <input
                value={input}
                onChange = { (e) => setInput(e.target.value)}
                placeholder={`${channelName?.toLowerCase()}`} 
                />
                <button type='submit' onClick={sendMessage}>
                    SEND</button>

            </form>

        </div>
    )
}

export default ChatInput

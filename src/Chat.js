import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom"
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';
import db from "./firebase"
import Message from './Message';
import ChatInput from './ChatInput'
function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (setRoomDetails(snapshot.data())
                ))
        }
        db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data()))
            )
    }, [roomId])
    console.log("DETAILS OF ROOM", roomDetails)
    console.log("MESSAGES", roomId)
    
    return (
        <div className="chat">

            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarOutlineIcon />
                    </h4>
                </div>


                <div className="chat_headerRight">
                    <p><InfoIcon />Details </p>
                </div>
            </div>

            <div className="chat_messages" >
                {/* for chat messaage */}
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}></ChatInput>

        </div>
    )
}

export default Chat
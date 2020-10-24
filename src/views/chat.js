import React, { useState } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
var chatSocket = io(ENDPOINT);

const Chat = () => {
    const [newMessage, setNewMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const [nick, setNick] = useState("");
    const [tempNick, setTempNick] = useState("");
    var dateTime = new Date();
    var timeStampHours = dateTime.getHours();
    var timeStampMinutes = dateTime.getMinutes();
    var timeStampSeconds = dateTime.getSeconds();
    var timeStamp = timeStampHours + ":" + timeStampMinutes + ":" + timeStampSeconds;

    function nickSubmit() {
        setNick(tempNick);
        const connectObject = {
            body: (timeStamp + " " + tempNick + " connected to the chat")
        };
        chatSocket.emit('send message', connectObject);
        chatSocket.off('message');
    }

    function handleNick(e) {
        chatSocket.off('message');
        setTempNick(e.target.value);
    }

    chatSocket.on('message', (message) => {
        receivedMsg(message);
    });

    function receivedMsg(message) {
        chatSocket.off('message');
        setAllMessages(oldMsgs => [...oldMsgs, message]);
    }

    async function sendMessage(ev) {
        ev.preventDefault();
        var msgStr = timeStamp + " " + nick + ": " + newMessage;
        const messageObject = {
            body: (msgStr)
        };

        setNewMessage("");
        chatSocket.emit('send message', messageObject);
        chatSocket.off('message');
    }

    function handleChange(ev) {
        chatSocket.off('message');
        setNewMessage(ev.target.value);
    }

    if (nick==="") {
        return (
            <div>
                <form onSubmit={nickSubmit} className="enterChat">
                    <label>Nickname:</label>
                    <input type="text" value={tempNick} onChange={handleNick} placeholder="Nickname: "></input>
                    <input type="Submit" value="Enter Chat" className="registerButton"></input>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Chat as {nick}</h2>
                <div className="chatWindow">
                    {allMessages.map((message, index) => (
                        <p className="txtMsg" key={index}>{message.body}</p>
                    ))}
                </div>
                <form onSubmit={sendMessage}>
                    <textarea value={newMessage} onChange={handleChange} placeholder="Message: " className="areaChat"/>
                    <input type="Submit" value="Send" className="registerButton"></input>
                </form>
            </div>
        );
    }
}

export default Chat;

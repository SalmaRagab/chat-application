import ChatMessage from "../ChatMessage/ChatMessage";
import { Button } from "react-bootstrap";
import "./ChatRoom.css";
import { useEffect, useState, useRef } from "react";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {API_BASE_URL} from '../Constants';

export default function ChatRoom() {

    const userName = localStorage.getItem('userName');
    var socket = new SockJS(`${API_BASE_URL}/stomp-endpoint`);

    let stompClient = null;
    stompClient = Stomp.over(socket);
    const messagesEndRef = useRef(null)

    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [connectedStatus, setConnectedStatus] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE_URL}/messages`)
              .then(response => response.json())
              .then(data => setChatMessages(data));
      }, []);

    useEffect(() => {
        connect();
    }, []);

    function connect(e) {
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            setConnected(true);
            stompClient.subscribe('/message/chat', function (message) {
                console.log('Message recieved: ', message);
                onMessageReceived(message.body);
            });
        });
    }

    function sendMessage(e) {
        e.preventDefault();
        if (message.trim().length > 0) {
            stompClient.send("/app/send-message", {}, JSON.stringify({'sender': userName, 'content': message}));
        }
        setMessage('');
    }

    function setConnected(connected) {
        if (connected) {
            setConnectedStatus(true);
        } else {
            setConnectedStatus(false);
        }
    }

    function onMessageReceived(payload) {
        var message = JSON.parse(payload);
        setChatMessages(prevMessages => {
            const auxArr = [...prevMessages];
            auxArr.push(message);
            return auxArr;
        })
    }

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(scrollToBottom, [chatMessages]);

    return (
        <div className="chatRoom">
            <div className="messagesSection">
                {chatMessages.map((chatMessage, i) => (
                    <ChatMessage key={i} sender={chatMessage.sender}
                    date={chatMessage.dateTime} content={chatMessage.content} />
                ))}
                <div ref={messagesEndRef}/>
                {!connectedStatus && <div>You're not connected yet</div>}
            </div>
            <div className="myMessageSection">
                <input className="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} type="text" 
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                />
                <Button className="sendMessageBtn" onClick={(e) => sendMessage(e)} size="sm">Send</Button>
            </div>
        </div>
    );
}

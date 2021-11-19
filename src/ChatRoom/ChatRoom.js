import ChatMessage from "../ChatMessage/ChatMessage";
import { Button } from "react-bootstrap";
import "./ChatRoom.css";

export default function ChatRoom() {

    let chatMessages = [
        {
            userName: "joffrey",
            dateTime: "10 Mar 2018",
            message: "Brilliant"
        },
        {
            userName: "NINJA",
            dateTime: "10 Mar 2018 9:55",
            message: "Great resource, thanks"
        },
        {
            userName: "I am mister brilliant",
            dateTime: "10 Mar 2018 10:10",
            message: "THANKSSSS!!"
        },
        {
            userName: "martin7",
            dateTime: "10 Mar 2018 10:19",
            message: "Thanks Peter"
        },
        {
            userName: "martin6",
            dateTime: "10 Mar 2018 10:19",
            message: "Thanks Peter"
        },
        {
            userName: "martin5",
            dateTime: "10 Mar 2018 10:19",
            message: "Thanks Peter"
        },
        {
            userName: "martin4",
            dateTime: "10 Mar 2018 10:19",
            message: "Thanks Peter"
        },
        {
            userName: "martin3",
            dateTime: "10 Mar 2018 10:19",
            message: "Thanks Peter"
        },
        {
            userName: "martin2",
            dateTime: "10 Mar 2018 10:19",
            message: "Thanks Peter"
        },
        {
            userName: "martin1",
            dateTime: "10 Mar 2018 10:17",
            message: "Thanks Peter"
        },
    ]
    return (
        <div className="chatRoom">
            <div className="messagesSection">
                {chatMessages.map(chatMessage => (
                    <ChatMessage userName={chatMessage.userName}
                    dateTime={chatMessage.dateTime} message={chatMessage.message} />
                ))}
            </div>
            <div class="myMessageSection">
                <input className="messageInput" type="text"></input>
                <Button className="sendMessageBtn" size="sm">Send</Button>
            </div>
        </div>
    );
}

import './ChatMessage.css';
export default function ChatMessage(props) {
    return (
        <div className="chatMessage">
            <div className="messageInfo">
                {props.userName}
            </div>
            <div>
                {props.message}
            </div>
            <div className="messageInfo">
                {props.dateTime}
            </div>
        </div>
    );
}

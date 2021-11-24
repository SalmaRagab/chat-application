import './ChatMessage.css';
export default function ChatMessage(props) {
    let userName = localStorage.getItem('userName')

    return (
            props.sender === userName ? (
                <div className="myChatMessage">
                    <div className="messageInfo">
                        You
                    </div>
                    <div>
                        {props.content}
                    </div>
                    <div className="messageInfo">
                        {new Date(props.date).toLocaleString()}
                    </div>
                </div>
            ):(
                <div className="othersChatMessage">
                    <div className="messageInfo">
                        {props.sender}
                    </div>
                    <div>
                        {props.content}
                    </div>
                    <div className="messageInfo">
                        {new Date(props.date).toLocaleString()}
                    </div>
                </div>
            )
            
    );
}

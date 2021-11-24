import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    return (
        <div className="Home">
            <div className="welcomeMessage">
                Welcome to the Chat Room!
            </div>
            <div className="navigateToLink">
                <Link to="/login">Press here to enter your name and have some fun!</Link>
            </div>
        </div>
    );
}
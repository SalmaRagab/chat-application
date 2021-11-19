import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="Home">
            Welcome!
            <Link to="/login">Login from here</Link>
        </div>
    );
}
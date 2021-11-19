import { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    function validateUserName() {
        return userName.length > 0 && userName.trim().length > 0;
    }

    function login(event) {
        navigate('/chat-room');
    }

    return (
        <div className="Login">
            <Form onSubmit={login}>
                <FormGroup size="lg" controlId="userName">
                    <FormLabel>User name</FormLabel>
                    <FormControl autoFocus type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </FormGroup>
            <Button block size="lg" type="submit" disabled={!validateUserName()}>
                Login
            </Button>
            </Form>
        </div>
    );
}

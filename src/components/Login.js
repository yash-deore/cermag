import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { magic } from "../magic";
import { Container, Form, Button } from "react-bootstrap";

export default function Login() {
    const [email, setEmail] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const history = useHistory();

    const login = useCallback(async () => {
        setIsLoggingIn(true);

        try {
            await magic.auth.loginWithMagicLink({
                email,
                redirectURI: new URL("/callback", window.location.origin).href,
            });
            history.push("/profile");
        } catch {
            setIsLoggingIn(false);
        }
    }, [email]);

    /**
     * Saves the value of our email input into component state.
     */
    const handleInputOnChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);

    return (
        <Container>
            <h1>Please sign up or login</h1>

            <Form.Group className="mb-3">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={handleInputOnChange}
                    disabled={isLoggingIn}
                />
            </Form.Group>

            <Button onClick={login} disabled={isLoggingIn}>
                Send
            </Button>
        </Container>
    );
}

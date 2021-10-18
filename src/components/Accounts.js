import React from "react";
import { Container, Card } from "react-bootstrap";

const Accounts = ({ userEmail, userAddress }) => {
    return (
        <Container>
            <Card style={{ width: "30rem" }} className="text-center">
                <Card.Body>
                    <Card.Title>{userEmail}</Card.Title>
                    <Card.Title>{userAddress}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Accounts;

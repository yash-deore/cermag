import React from "react";
import { Container, Card } from "react-bootstrap";

const UserDetails = ({ userName, userBio, userImage }) => {
    return (
        <Container>
            <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={userImage} />
                <Card.Body>
                    <Card.Title>{userName}</Card.Title>
                    <Card.Text>{userBio}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserDetails;

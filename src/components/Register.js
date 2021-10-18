import React, { useEffect, useState } from "react";
import { magic } from "../magic";
import { Container, Form, Button, Image } from "react-bootstrap";
import { getFileUrl, UpdateProfile } from "../functions/Export";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [userMetadata, setUserMetadata] = useState();
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();

    const register = async (e) => {
        e.preventDefault();
        await UpdateProfile(name, bio, image);
        history.push("/profile");
    };

    const getImage = async (e) => {
        const file = e.target.files[0];
        const imageUrl = await getFileUrl(file);
        setImage(imageUrl);
    };

    useEffect(() => {
        magic.user.isLoggedIn().then((magicIsLoggedIn) => {
            if (magicIsLoggedIn) {
                magic.user.getMetadata().then(setUserMetadata);
            } else {
                history.push("/login");
            }
        });
    }, []);

    return (
        <Container>
            <h1>Register</h1>
            <Form onSubmit={register}>
                <Form.Group className="mb-3">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bio :</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Bio"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Profile Image : </Form.Label>
                    <Form.File type="file" onChange={(e) => getImage(e)} />
                </Form.Group>

                <Image src={image} styles={{ width: "250px" }} fluid />
                <br />

                <Button type="submit">Register</Button>
                {name}
                {bio}
            </Form>
        </Container>
    );
};

export default Register;

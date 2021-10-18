import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Button, Image } from "react-bootstrap";
import { magic } from "../magic";

import { ReadProfile, getFileUrl, UpdateProfile } from "../functions/Export";
import Loading from "./Loading";

const EditProfile = () => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const setUserDetails = async () => {
        setLoading(true);

        const userProfile = await ReadProfile();
        setName(userProfile.name);
        setBio(userProfile.description);
        setImage(userProfile.avatar);

        setLoading(false);
    };

    const getImage = async (e) => {
        const file = e.target.files[0];
        const imageUrl = await getFileUrl(file);
        setImage(imageUrl);
    };

    const edit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await UpdateProfile(name, bio, image);
        history.push("/profile");

        setLoading(false);
    };

    useEffect(() => {
        magic.user.isLoggedIn().then((magicIsLoggedIn) => {
            if (magicIsLoggedIn) {
                setUserDetails();
            } else {
                history.push("/login");
            }
        });
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <Container>
            <h1>Edit Profile</h1>
            <Form onSubmit={edit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bio :</Form.Label>
                    <Form.Control
                        required
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

                <Image src={image} width="250" className="mb-3" />
                <br />

                <Button type="submit">Save Changes</Button>
            </Form>
        </Container>
    );
};

export default EditProfile;

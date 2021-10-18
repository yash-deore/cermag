import React, { useState } from "react";
import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Form,
} from "react-bootstrap";
import UserDetails from "./UserDetails";
import { ExploreProfile } from "../functions/Export";

const Explore = () => {
    const [userInfo, setUserInfo] = useState({});
    const [showProf, setShowProf] = useState(false);
    const [exploreAddress, setExploreAddress] = useState("");

    const search = (e) => {
        e.preventDefault();
        exploreUser(exploreAddress);
        setShowProf(true);
    };

    const exploreUser = async (addr) => {
        const userProfile = await ExploreProfile(addr);
        setUserInfo(userProfile);
        console.log(userProfile);
    };

    return (
        <Container>
            <h3>Explore</h3>
            <Form onSubmit={search}>
                <InputGroup>
                    <FormControl
                        placeholder="Ethereum address of the user"
                        onChange={(e) => {
                            setExploreAddress(e.target.value);
                        }}
                        required
                    />
                    <Button variant="outline-primary" type="submit">
                        Search
                    </Button>
                </InputGroup>
            </Form>

            {showProf ? (
                <Container>
                    <UserDetails
                        userName={userInfo.name}
                        userBio={userInfo.description}
                        userImage={userInfo.avatar}
                    />

                    <Container>
                        <h5>
                            Enter the ethereum address of the user you want to
                            search for .
                        </h5>
                        <h6>Try searching for these addresses : </h6>
                        <h6>1 . 0x991b6CC582368502C3776D15242f04f1f3723690</h6>
                        <h6>2 . 0xB4c5F5932E18F21C46Ab82E78A52b5a5B46b9857</h6>
                        <h6>3 . 0x110F1CfC8C0669Ee94d1793C70b36955d218D466</h6>
                    </Container>
                </Container>
            ) : (
                <Container>
                    <h5>
                        Enter the ethereum address of the user you want to
                        search for .
                    </h5>
                    <h6>Try searching for these addresses : </h6>
                    <h6>1 . 0x991b6CC582368502C3776D15242f04f1f3723690</h6>
                    <h6>2 . 0xB4c5F5932E18F21C46Ab82E78A52b5a5B46b9857</h6>
                    <h6>3 . 0x110F1CfC8C0669Ee94d1793C70b36955d218D466</h6>
                </Container>
            )}
        </Container>
    );
};

export default Explore;

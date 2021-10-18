import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import { Container, Button, Tabs, Tab } from "react-bootstrap";
import { magic } from "../magic";
import Loading from "./Loading";
import { ConnectWallet, ReadProfile } from "../functions/Export";
import UserDetails from "./UserDetails";
import Accounts from "./Accounts";

export default function Profile() {
    const [userMetadata, setUserMetadata] = useState();
    const [address, setAddress] = useState("");
    const [userInfo, setUserInfo] = useState({});
    const history = useHistory();

    const setUserAddress = async () => {
        const addr = await ConnectWallet();
        setAddress(addr);
        await readCeramicProfile();
    };

    const readCeramicProfile = async () => {
        const userData = await ReadProfile();
        if (userData) {
            if (
                userData.name === "" ||
                userData.description === "" ||
                userData.image === ""
            ) {
                history.push("/register");
            } else {
                setUserInfo(userData);
                console.log(userData);
            }
        } else {
            history.push("/register");
        }
    };

    const edit = () => {
        history.push("/edit");
    };

    useEffect(() => {
        magic.user.isLoggedIn().then((magicIsLoggedIn) => {
            if (magicIsLoggedIn) {
                magic.user.getMetadata().then(setUserMetadata);
                setUserAddress();
            } else {
                history.push("/login");
            }
        });
    }, []);

    return userMetadata ? (
        <Container>
            <h1>Your Profile</h1>
            <h6>If you are facing any issues please reload</h6>

            <Button onClick={edit} className="mb-3">
                Edit Profile
            </Button>

            <Tabs defaultActiveKey="accounts" className="mb-3">
                <Tab eventKey="accounts" title="Connected Accounts">
                    <Accounts
                        userEmail={userMetadata.email}
                        userAddress={address}
                    />
                </Tab>

                <Tab eventKey="profile" title="Your Information">
                    <UserDetails
                        userName={userInfo.name}
                        userBio={userInfo.description}
                        userImage={userInfo.avatar}
                    />
                </Tab>
            </Tabs>
        </Container>
    ) : (
        <Loading />
    );
}

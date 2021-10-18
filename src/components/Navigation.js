import React, { useCallback, useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { magic } from "../magic";

const Navigation = () => {
    const history = useHistory();
    const [isLogged, setIsLogged] = useState(false);

    const logout = useCallback(() => {
        magic.user.logout().then(() => {
            history.push("/login");
        });
        setIsLogged(false);
    }, [history]);

    const login = () => {
        history.push("/login");
    };

    useEffect(() => {
        magic.user.isLoggedIn().then((magicIsLoggedIn) => {
            if (magicIsLoggedIn) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        });
    }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/cermag">🔮✨CerMag✨🔮</Navbar.Brand>

                    <Nav>
                        <Nav.Link
                            style={{ textDecoration: "none", color: "white" }}
                            href="https://yash-deore.github.io/cermagchat/"
                        >
                            Connect
                        </Nav.Link>

                        <Nav.Link>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to="/profile"
                            >
                                My Profile
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to="/explore"
                            >
                                Explore
                            </Link>
                        </Nav.Link>

                        {isLogged ? (
                            <Button onClick={logout} className="mr-1">
                                Logout
                            </Button>
                        ) : (
                            <Button onClick={login}>Login</Button>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;

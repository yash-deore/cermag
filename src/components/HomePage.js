import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container>
            <br />
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MeKzW_Ej2M0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <br />
            <h6>
                This is the demo video 📽 of the project .
                <br />
                Made by{" "}
                <a href="https://github.com/yash-deore" target="_blank">
                    Yash Deore
                </a>
            </h6>
        </Container>
    );
};

export default HomePage;

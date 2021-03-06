import React from "react";
import { Container } from "reactstrap";
import "../assets/css/HomePage.css";

import NavbarComponent from "../components/NavbarComponent";
import PuzzleGame from "../components/PuzzleGame";

const HomePage = () => {

    return (
        <Container fluid>
            <h1 id="heading">Persian Civilization</h1>

            <NavbarComponent />

            <div id="quote-1">
                <h4><b>THE ONE</b></h4>
                <p>Ancient Persians subscribed to the first known
                Monotheistic religion, Zoroastrianism. The roots
                of many belief systems that would develop under
                Judaism and Christianity had root in Zoroastrianism.</p>
            </div>

            <div id="quote-2">
                <p>“Hope had only revealed herself to him when
                he was immersed in darkness”</p>
                <p id="quote-author">― Soroosh Shahrivar</p>
            </div>

            
            <PuzzleGame id="puzzle-game" />
        </Container>
    );
}

export default HomePage;
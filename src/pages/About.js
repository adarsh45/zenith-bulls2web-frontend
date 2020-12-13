import React, { useState } from "react";
import { Container } from "reactstrap";
import NavbarComponent from "../components/NavbarComponent";
import "./style.css";

const About = () => {
  const [facts, setfacts] = useState("");
  const factsArr = [
    "At one point, the Achaemenid Empire stretched so far, it contained an unbelievable 44% of the world’s population. This amounted to 49.4 million out of 112.4 million people in the world.",
    "What we consider the Persian Empire today was actually a series of imperial dynasties revolving around the region of Persia—modern day Iran—ranging from 6th century BC right up until the 20th century AD.",
    "The main tactic used by Cyrus the Great in taking Babylon was strategic propaganda, as he subverted the reigning King of Babylonia by appealing directly to the people.",
    "In addition to being the largest, Cyrus’ empire was possibly the most diverse empire of its time as well, with many different ethnic groups living under the imperial conquests",
    "When Cyrus the Great established his empire, he did so by conquering Babylon with minimal bloodshed, and was able to free captive Jews in the process. He would then reestablish Jerusalem and order the construction of the Second Temple of Jerusalem.",
    "The Persians were capable of conquering such vast terrain because of their superior horsemanship and powerful cavalry. This made them stronger than anyone else in Western Asia, and allowed them to easily defeat enemies and take over land.",
    "While the rest of the ancient world was running around in long flowing robes and togas, the Persians were sitting comfortably in pants. They invented trousers, and the word “pajama” is their creation.",
    "While the rest of the ancient world was running around in long flowing robes and togas, the Persians were sitting comfortably in pants. They invented trousers, and the word “pajama” is their creation.",
    "Ancient Persians subscribed to the first known Monotheistic religion, Zoroastrianism (or semi-monotheistic; it has dualistic qualities). The roots of many belief systems that would develop under Judaism and Christianity had root in Zoroastrianism.",
    "Roses originated in Persia, and it wasn’t until the Yellow Persian Rose made its way to Vienna in the 16th century that Europe was aware of this beautiful, fragrant flower.",
    "The first to distill perfumes, the Persians would make rose perfumes that were the precursor to alcohol based perfumes, and also used various massaging oils and scented hand creams, which were seriously in vogue for the kings.",
    "The first to distill perfumes, the Persians would make rose perfumes that were the precursor to alcohol based perfumes, and also used various massaging oils and scented hand creams, which were seriously in vogue for the kings.",
    "In a custom we should all follow, if a decision was made in Persia while drunk, it had to be reviewed the following day when you were sober.",
    "The King presided over an annual ceremony where distinguished people among the population were showered with lavish gifts by the King himself. People were rewarded for everything from military success to the killing of the most scorpions.",
    "Persian summers can get HOT. To combat this, they developed an ancient form of refrigeration, which is an early ancestor to that steely monster sitting in your kitchen right now. The system involved a cooled underground chamber inside a conical structure. These refrigeration systems are known as Yakhchals.",
    "Long before the modern Western world worked to connect the Red Sea and the Nile River, Darius the Great ordered the construction of a canal between the two bodies of water. The canal, called the Canal of the Pharaohs, remained functional for many centuries afterward.",
  ];

  const getFacts = () => {
    setfacts(factsArr[Math.floor(Math.random() * factsArr.length)]);
  };

  return (
    <Container fluid>
      <NavbarComponent />
      <div className="factDiv">
        <button className="factBtn" onClick={getFacts}>
          <i className="fa fa-random" aria-hidden="true"></i>
          <br />
          Random Facts
        </button>
      </div>
      <div className="factDiv">
        <p className="factPara">{facts ? facts : null}</p>
      </div>
    </Container>
  );
};

export default About;

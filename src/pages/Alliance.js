import React, { useState } from "react";
import { Container } from "reactstrap";
import NavbarComponent from "../components/NavbarComponent";
import "./style.css";

const Alliance = () => {
  const [data, setdata] = useState([]);
  const civilization = [
    "Persian",
    "Maya",
    "Aztec",
    "Inca",
    "Ancient Chinese",
    "Ancient Greek",
  ];
  const majorFood = [
    "Lamb and goat",
    "Corn (maize)",
    "Maize, beans and squash",
    "sweet potatoes,  mashwa, squash, talwi",
    "Soybeans and Cucumber, Wine (Rice and Millet)",
    "Olives, breads, figs",
  ];
  const primaryWeapon = [
    "Bow",
    "Obsidian spear tips",
    "Macuahuitl",
    "Spears",
    "Bow",
    "Doru",
  ];
  const countryOfOrigin = [
    "Iranian plateau",
    "Mexico and Central America",
    "Central and southern Mexico",
    "Southeastern Peru",
    "Yellow River region of northern China",
    "Lands of Greece and the islands of Aegean Sea",
  ];

  const founder = [
    "Cyrus the Great",
    "Kʼinich Yax Kʼukʼ Moʼ",
    "Itzcoatl's successor Montezuma (Moctezuma) I",
    "Manco Capac",
    "Qin Shi Huang",
    "Herodotus",
  ];

  const feature = (feature) => {
    switch (feature) {
      case "Major Food":
        setdata(majorFood);
        break;
      case "Primary Weapon":
        setdata(primaryWeapon);
        break;
      case "Country of Origin":
        setdata(countryOfOrigin);
        break;
      case "Founder":
        setdata(founder);
        break;
      default:
        break;
    }
  };

  return (
    <Container fluid>
      <NavbarComponent />
      <div className="featureDiv">
        <button
          className="featureBtn"
          onClick={() => {
            feature("Major Food");
          }}
        >
          <i class="fa fa-cutlery" aria-hidden="true"></i>
        </button>
        <button
          className="featureBtn"
          onClick={() => {
            feature("Primary Weapon");
          }}
        >
          <i class="fa fa-gavel" aria-hidden="true"></i>
        </button>
        <button
          className="featureBtn"
          onClick={() => {
            feature("Country of Origin");
          }}
        >
          <i class="fa fa-globe" aria-hidden="true"></i>
        </button>
        <button
          className="featureBtn"
          onClick={() => {
            feature("Founder");
          }}
        >
          <i class="fa fa-user" aria-hidden="true"></i>
        </button>
      </div>
      <div style={{ paddingLeft: "70px", textAlign: "center" }}>
        {data.map((data, index) => {
          return (
            <>
              <p className="civilizationName">{`${civilization[index]} Civilization: `}</p>
              <p>{data}</p>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default Alliance;

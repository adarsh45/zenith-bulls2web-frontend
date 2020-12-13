import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import NavbarComponent from "../components/NavbarComponent";
import Poll from "react-polls";
import InventoryItem from "../components/InventoryItem";
import "../assets/css/Inventory.css"

const Inventory = () => {

  const pollStyle = {
    color: "white"
}

  const inventoryItems = [
    {itemId: 0, itemImage: "https://i.ebayimg.com/images/g/rvEAAOSwjgtf1Rgp/s-l1600.jpg", itemName: "Wine Maker", itemPrice: "1400.50"},
    {itemId: 1, itemImage: "https://i.ebayimg.com/images/g/B3EAAOSw2y1eclGp/s-l500.jpg", itemName: "Persische Kachel", itemPrice: "950.00"},
    {itemId: 2, itemImage: "https://i.ebayimg.com/images/g/WWoAAOSwQ8FfqpuB/s-l1600.jpg", itemName: "Brass Samovar Tea Pot", itemPrice: "240.00"},
    {itemId: 3, itemImage: "https://i.ebayimg.com/images/g/ZyMAAOSwcMlfzvpC/s-l500.jpg", itemName: "Islamic Wavyt Sword", itemPrice: "1450.00"},
    {itemId: 4, itemImage: "https://i.ebayimg.com/images/g/sVIAAOSwhhpamXxg/s-l1600.jpg", itemName: "Indo Persian Helmet", itemPrice: "1600.00"},
    {itemId: 5, itemImage: "https://i.ebayimg.com/images/g/rAUAAOSwm4tcqQRZ/s-l1600.jpg", itemName: "OTTOMAN SABRE KARABELA", itemPrice: "55.00"},
  ]

  const pollQuestion = "Is react-polls useful?";
  const [pollAnswers, setpollAnswers] = useState([
    { option: "Yes", votes: 5 },
    { option: "No", votes: 2 },
  ]);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setpollAnswers(newPollAnswers);
  };

  return (
    <Container className="inv_container">
      <NavbarComponent />
      <h1 id="inv_heading">Inventory</h1>

      <h4 id="inv_text">Enthusiastic about Ancient Persian Objects Collection or an Art Lover ? Buy most interesting objects from ancient Persian Culture here !!!</h4>

      <Row className="inv_division">
            {
                inventoryItems.map(item => (
                    <Col key={item.itemId} md={4}>
                        <InventoryItem 
                          key={item.index}
                          item={item}/>
                    </Col>
                ))
            }
            </Row>


      <div>
        <Poll
          style={pollStyle}
          question={pollQuestion}
          answers={pollAnswers}
          onVote={handleVote}
        />
      </div>
    </Container>
  );
};

export default Inventory;

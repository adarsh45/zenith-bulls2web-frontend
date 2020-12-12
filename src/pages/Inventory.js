import React, { useState } from "react";
import { Container } from "reactstrap";
import NavbarComponent from "../components/NavbarComponent";
import Poll from "react-polls";

const Inventory = () => {
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
    <Container fluid>
      <NavbarComponent />
      <div>Inventory</div>
      <div>
        <Poll
          question={pollQuestion}
          answers={pollAnswers}
          onVote={handleVote}
        />
      </div>
    </Container>
  );
};

export default Inventory;

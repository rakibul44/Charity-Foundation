import React from "react";
import Pcard from "./Pcard";

const App = () => {
  // Array of image data
  const cardData = [
    {
      image: "https://via.placeholder.com/300",
      title: "Card 1",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Card 2",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Card 3",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Card 4",
    },
  ];

  return (
    <div className="card-section">
      {cardData.map((card, index) => (
        <Pcard key={index} image={card.image} title={card.title} />
      ))}
    </div>
  );
};

export default App;

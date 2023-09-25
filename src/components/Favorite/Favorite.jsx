import React, { useState } from "react";
import Card from "../Card/Card";

export default function Favorite(props) {
  const [favoriteCards, setFavoriteCards] = useState([]);

  // Logic to add cards to favoriteCards state
  // You can pass a callback function to the Card component
  const handleFavoriteClick = (cardId) => {
    // Check if the card is already in the favoriteCards array
    const cardExists = favoriteCards.some((card) => card.id === cardId);

    if (cardExists) {
      // Remove the card from favoriteCards if it already exists
      const filteredCards = favoriteCards.filter((card) => card.id !== cardId);
      setFavoriteCards(filteredCards);
    } else {
      // Add the card to favoriteCards if it doesn't exist
      // Retrieve the card from the characters array using the cardId
      const card = props.characters.find((card) => card.id === cardId);
      setFavoriteCards([...favoriteCards, card]);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin}
            image={card.image}
            onClose={() => handleFavoriteClick(card.id)}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
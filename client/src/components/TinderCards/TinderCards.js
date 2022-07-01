import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { getCards } from "../../api/index";

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await getCards();
      console.log(data);
      setPeople(data);
    };
    fetchPeople();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing", nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " Left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

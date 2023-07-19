import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {id, name, hp, sprites: {front, back}} = pokemon;
  const[isFront, setIsFront] = useState(true);
  
  function handleClick(){
    setIsFront(!isFront)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          {isFront? <img alt="oh no!" src={front} /> : <img src={back} />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

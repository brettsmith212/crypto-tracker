import React from "react";
import { Section, Card } from "./styles/Tokens.styled";

function WatchList(props) {
  let watchList = props.savedToken.map((token) => {
    return (
      <Card key={token.id}>
        <img src={token.image} alt="Token Displayed" />
        <h1>{token.name}</h1>
        <h2>${token.current_price}</h2>
        <h3>{token.symbol}</h3>
      </Card>
    );
  });
  return (
    <Section>
      <h2>WatchList</h2>
      {watchList}
    </Section>
  );
}

export default WatchList;

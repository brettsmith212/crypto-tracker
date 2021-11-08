import React from "react";
import { Section, Card } from "./styles/Tokens.styled";

function Tokens(props) {
  const filteredTokens = props.token.filter((token) => {
    return token.name.toLowerCase().includes(props.search.toLowerCase());
  });

  let tokensList = filteredTokens.map((token) => {
    return (
      <Card>
        <img src={token.image} alt="Token Displayed" />
        <h1>{token.name}</h1>
        <h2>${token.current_price}</h2>
        <h3>{token.symbol}</h3>
      </Card>
    );
  });

  return <Section>{tokensList}</Section>;
}

export default Tokens;

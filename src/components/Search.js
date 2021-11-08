import React, { useState, useEffect } from "react";
import { Section, SearchDiv } from "./styles/Search.styled";
import axios from "axios";

function Search() {
  const [token, setToken] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  //       )
  //       .then((res) => {
  //         setToken(res.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);
  return (
    <Section>
      <SearchDiv>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </SearchDiv>
    </Section>
  );
}

export default Search;

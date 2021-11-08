import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section, SearchDiv } from "./styles/Search.styled";
import Tokens from "./Tokens";

function Search() {
  const [token, setToken] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setToken(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  console.log(token);
  console.log(search);

  return (
    <>
      <Section>
        <SearchDiv>
          <form>
            <input
              type="text"
              placeholder="Search"
              onChange={onChangeHandler}
            />
          </form>
        </SearchDiv>
      </Section>
      <Tokens token={token} search={search} />
    </>
  );
}

export default Search;

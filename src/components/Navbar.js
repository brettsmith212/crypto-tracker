import React from "react";
import { StyledHeader, Navbar, Logo } from "./styles/Navbar.styled";

function NavBar() {
  return (
    <StyledHeader>
      <Navbar>
        <Logo>
          <h2>Crypto Tracker</h2>
        </Logo>
      </Navbar>
    </StyledHeader>
  );
}

export default NavBar;

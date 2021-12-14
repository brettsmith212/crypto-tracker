import styled from "styled-components";

export const Section = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.section};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchDiv = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    height: 100%;
  }
  input {
    height: 2rem;
    width: 100%;
    padding: 3% 1.5%;
    font-size: ${({ theme }) => theme.fontSize.input};
  }
`;

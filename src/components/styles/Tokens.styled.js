import styled from "styled-components";

export const Section = styled.section`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.section};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Card = styled.div`
  height: 20rem;
  width: 20rem;
  margin: 3%;
  padding: 2.5%;
  text-align: center;

  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.034),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.041),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

  &:hover {
    transform: scale(1.1);
  }

  h1 {
    font-size: 2rem;
    margin-top: 0.5rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
  h3 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
  img {
    width: 4rem;
    height: 4rem;
  }
`;
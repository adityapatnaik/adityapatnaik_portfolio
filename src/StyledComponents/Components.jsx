import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  position: relative;
  width: calc(100% - 20%);
  margin-top: 35vh;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
  /* margin-left: auto;
  margin-right: auto; */
`;

export const Tagline = styled.span`
  flex: none;
  order: 0;
  flex-grow: 0;
  /* margin-left: auto;
  margin-right: auto; */
  margin-bottom: 2rem;
  /* text-align: center; */
  font-size: 1rem;
  @media (max-width: 450px) {
    font-size: 0.92rem;
  }
`;

export const Footer = styled.span`
  position: fixed;
  bottom: 5%;
  margin-right: auto;
`;

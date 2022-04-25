import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  position: relative;
  width: calc(100% - 20%);
  min-height: 100%;
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
  bottom: 7%;
  margin-right: auto;
  z-index: 1;
`;

export const Filler = styled.div`
  min-height: 4rem;
  width: 100%;
  content: " ";
`;

export const Overlay = styled.div`
  position: fixed;
  height: 100px;
  width: 100vw;
  bottom: 0;
  z-index: 0;
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9136029411764706) 0%,
    rgba(0, 0, 0, 1) 52%,
    rgba(0, 0, 0, 0.8547794117647058) 100%
  );
  background: -webkit-linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9136029411764706) 0%,
    rgba(0, 0, 0, 1) 52%,
    rgba(0, 0, 0, 0.8547794117647058) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9136029411764706) 0%,
    rgba(0, 0, 0, 1) 52%,
    rgba(0, 0, 0, 0.8547794117647058) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
`;

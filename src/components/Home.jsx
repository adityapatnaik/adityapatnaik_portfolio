import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
import Globals from "../Globals";
import styled from "styled-components";

const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  background: #caf0f8;
  position: relative;
  min-height: 646.4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  top: 218.5px;
  @media (max-width: 450px) {
    margin: 0 1rem;
  }
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

const RoleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 52px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const ByLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;
const Role = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 2px 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;
const Organization = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const Home = (props) => {
  const arrowUp = useRef(null);
  const build = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: arrowUp.current,
      name: "work",
      renderer: "svg",
      animationData: require("../LottieFiles/work-solid.json"),
      loop: false,
      autoplay: true
    });

    lottie.loadAnimation({
      container: build.current,
      name: "build",
      renderer: "svg",
      animationData: require("../LottieFiles/build.json"),
      loop: true,
      autoplay: true
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <HeroSection>
      <Container>
        <NameSection>
          <Name>Aditya Patnaik</Name>
          <ByLine>
            I can build{" "}
            <span
              ref={build}
              style={{ width: "3rem", padding: "0.5rem", alignItems: "bottom" }}
            ></span>{" "}
            things!
          </ByLine>
        </NameSection>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <RoleSection>
            <Role>Software Developer</Role>
            <Organization>Infosys</Organization>
          </RoleSection>
          <div
            ref={arrowUp}
            onMouseEnter={() => lottie.play("work")}
            onMouseLeave={() => lottie.pause("work")}
            style={{ width: "3rem", padding: "0.5rem", alignItems: "bottom" }}
          ></div>
        </div>
      </Container>
    </HeroSection>
  );
};

export default Home;

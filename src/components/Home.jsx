import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import Globals from "../Globals";
import {
  HeroSection,
  Container,
  NameSection,
  RoleSection,
  Name,
  ByLine,
  Organization,
  Role
} from "../StyledComponents/HomeStyles";

const Home = (props) => {
  const arrowUp = useRef(null);
  const build = useRef(null);

  useEffect(() => {
    // lottie.loadAnimation({
    //   container: arrowUp.current,
    //   name: "work",
    //   renderer: "svg",
    //   animationData: require("../LottieFiles/work-solid.json"),
    //   loop: false,
    //   autoplay: true
    // });

    // lottie.loadAnimation({
    //   container: build.current,
    //   name: "build",
    //   renderer: "svg",
    //   animationData: require("../LottieFiles/build.json"),
    //   loop: true,
    //   autoplay: true
    // });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <HeroSection>
      <Container>
        <NameSection>
          <Name>
            I can build things <span style={{ color: "#DC143C" }}>better</span>!
          </Name>
          <ByLine>Aditya Patnaik</ByLine>
        </NameSection>

        <RoleSection>
          <Role>Software Developer</Role>
          <Organization>Infosys</Organization>
        </RoleSection>
        {/* <div
            ref={arrowUp}
            onMouseEnter={() => lottie.play("work")}
            onMouseLeave={() => lottie.pause("work")}
            style={{ width: "3rem", padding: "0.5rem", alignItems: "bottom" }}
          ></div> */}
      </Container>
    </HeroSection>
  );
};

export default Home;

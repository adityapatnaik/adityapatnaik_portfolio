import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";

const Parent = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Skills
        title="Backend / Frontend"
        byLine="Spring, Node, Express, Django, Flask | React, Angular X, Electron, Jetpack Compose, Flutter and React Native"
        footer="Skills"
      />
    </div>
  );
};

export default Parent;

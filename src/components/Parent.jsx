import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Awards from "./Awards";
import Contributions from "./Contributions";
import Projects from "./Projects";
import Positions from "./Positions";
import TopPosts from "./TopPosts";
import Footer from "./Footer";
const Parent = () => {
  return (
    <div className="App light-theme">
      <Home />
      <About />
      <Awards />
      <Contributions />
      <Skills
        title="Backend / Frontend"
        byLine="Spring, Node, Express, Django, Flask | React, Angular X, Electron, Jetpack Compose, Flutter and React Native"
        footer="Skills"
      />
      <Projects />
      <Positions />
      <TopPosts />
      <Footer />
    </div>
  );
};

export default Parent;

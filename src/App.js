import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import NextArrowHOC from "./components/NextArrowHOC";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route
            path="/"
            element={
              <Home title="Aditya Patnaik" byLine="Fullstack Developer" />
            }
          />
          <Route
            path="about"
            element={
              <About
                title="I'm a Fullstack Developer"
                byLine="I love to learn and network with people!"
                footer="About"
              />
            }
          />
          <Route
            path="work"
            element={
              <Work
                title="Senior Systems Engineer @Infosys"
                byLine="I develop Spring J2EE Enterprise Applications for a fintech giant."
                footer="Work"
              />
            }
          />
          <Route
            path="skills"
            element={
              <Skills
                title="Backend / Frontend"
                byLine="Spring, Node, Express, Django, Flask | React, Angular X, Electron, Jetpack Compose, Flutter and React Native"
                footer="Skills"
              />
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

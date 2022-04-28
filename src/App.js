import "./styles.css";
import Parent from "./components/Parent";
import NextArrowHOC from "./components/NextArrowHOC";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Parent />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
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
      </Routes> */}
    </Routes>
  );
}

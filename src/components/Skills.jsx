import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
import Globals from "../Globals";
import { Fragment } from "react";
const Skills = ({ title, byLine, footer }) => {
  return (
    <NextArrowHOC link="/">
      <Layout>
        {Object.entries(Globals.skill_categories).map((el, index) => {
          console.log(el);
          return (
            <Fragment>
              <Title>{el[0]}</Title>
              <Tagline>
                {el[1].map(
                  (skill, ind) => skill + (ind < el[1].length - 1 ? ", " : "")
                )}
              </Tagline>
            </Fragment>
          );
        })}
        <Footer>{Globals.menu["skills"]}</Footer>
      </Layout>
    </NextArrowHOC>
  );
};

export default Skills;

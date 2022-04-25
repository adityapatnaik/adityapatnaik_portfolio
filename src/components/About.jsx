import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
import Globals from "../Globals";
const About = () => {
  return (
    <NextArrowHOC link="/work">
      <Layout>
        <Title>{Globals.about_head}</Title>
        <Tagline>
          {Globals.about_desc}{" "}
          {Globals.hobbies.map(
            (el, ind) => el + (ind < Globals.hobbies.length - 1 ? ", " : "")
          )}
        </Tagline>
        {/* <Footer>{Globals.menu["about"]}</Footer> */}
      </Layout>
    </NextArrowHOC>
  );
};

export default About;

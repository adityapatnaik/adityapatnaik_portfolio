import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
import Globals from "../Globals";
const Work = () => {
  return (
    <NextArrowHOC link="/skills">
      <Layout>
        <Title>{Globals.position}</Title>
        <Tagline>{Globals.roleAtOrg}</Tagline>
        <Footer>{Globals.menu["work"]}</Footer>
      </Layout>
    </NextArrowHOC>
  );
};

export default Work;

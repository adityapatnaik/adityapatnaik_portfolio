import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
import Globals from "../Globals";
const Home = (props) => {
  return (
    <NextArrowHOC link="/about">
      <Layout>
        <Title>{Globals.title}</Title>
        <Tagline>{Globals.role}</Tagline>
      </Layout>
    </NextArrowHOC>
  );
};

export default Home;

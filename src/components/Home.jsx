import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
const Home = ({ title, byLine, footer }) => {
  return (
    <NextArrowHOC link="/about">
      <Layout>
        <Title>{title}</Title>
        <Tagline>{byLine}</Tagline>
        <Footer>{footer}</Footer>
      </Layout>
    </NextArrowHOC>
  );
};

export default Home;

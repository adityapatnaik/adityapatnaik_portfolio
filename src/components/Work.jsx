import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
const Work = ({ title, byLine, footer }) => {
  return (
    <NextArrowHOC link="/skills">
      <Layout>
        <Title>{title}</Title>
        <Tagline>{byLine}</Tagline>
        <Footer>{footer}</Footer>
      </Layout>
    </NextArrowHOC>
  );
};

export default Work;

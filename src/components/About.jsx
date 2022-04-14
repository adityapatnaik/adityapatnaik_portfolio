import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";

const About = ({ title, byLine, footer }) => {
  return (
    <NextArrowHOC link="/work">
      <Layout>
        <Title>{title}</Title>
        <Tagline>{byLine}</Tagline>
        <Footer>{footer}</Footer>
      </Layout>
    </NextArrowHOC>
  );
};

export default About;

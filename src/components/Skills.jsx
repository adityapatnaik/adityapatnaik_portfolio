import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import NextArrowHOC from "./NextArrowHOC";
const Skills = ({ title, byLine, footer }) => {
  return (
    <NextArrowHOC link="/">
      <Layout>
        <Title>{title}</Title>
        <Tagline>{byLine}</Tagline>
        <Footer>{footer}</Footer>
      </Layout>
    </NextArrowHOC>
  );
};

export default Skills;

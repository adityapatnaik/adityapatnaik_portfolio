import styled from "styled-components";
import HeroImg from "../Images/businessman_meditating.png";
import TextBox from "../components/TextBox";
const OuterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  /* background: linear-gradient(180deg, #e1e7f4 0%, #f4daf6 72.98%, #4aedbc 100%); */
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 20px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 28px 0px;

  font-family: var(--ff-inter);
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.005em;
`;

const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0px 48px;
  width: calc(100vw - 20%);
  @media (min-width: 1080px) {
    width: calc(100vw - 50%);
  }

  flex: none;
  order: 1;
  /* align-self: stretch; */
  flex-grow: 0;
  margin: 0px 0px;
`;
const Content = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 0px;
  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px 28px 0px;
`;

const SectionLayout = ({ heroImg, altText, heading, items, component }) => {
  return (
    <OuterLayout>
      <HeroImage src={heroImg} alt={altText} />
      <InnerLayout>
        <Heading>{heading}</Heading>
        <Content>
          {items.map((item, ind) => {
            return component === "textbox" ? (
              <TextBox item={item} ind={ind} />
            ) : component === "awards" ? (
              "awardscomponent"
            ) : (
              ""
            );
          })}
        </Content>
      </InnerLayout>
    </OuterLayout>
  );
};

export default SectionLayout;

import styled from "styled-components";

const OuterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const InnerLayout = styled.div``;
const Heading = styled.div``;
const Content = styled.div``;
const Textbox = styled.div``;

const SectionLayout = () => {
  return (
    <OuterLayout>
      <InnerLayout>
        <Heading>How am I Unique?</Heading>
        <Content>
          <Textbox></Textbox>
          <Textbox></Textbox>
          <Textbox></Textbox>
        </Content>
      </InnerLayout>
    </OuterLayout>
  );
};

export default SectionLayout;

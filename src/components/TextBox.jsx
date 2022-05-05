import styled from "styled-components";

const Textbox = styled.div`
  /* Auto layout */
  max-width: 398px;
  min-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 32px;
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  border: 1px solid grey;
`;

const Text = styled.div`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  /* or 167% */

  color: #696969;
`;

const TextBox = ({ item, ind }) => {
  return (
    <Textbox>
      <Text key={ind}>{item}</Text>
    </Textbox>
  );
};

export default TextBox;

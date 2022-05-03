import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  background: linear-gradient(
      160.72deg,
      rgba(255, 255, 255, 0.2) 7.46%,
      rgba(218, 102, 220, 0.178) 48.99%,
      rgba(83, 169, 218, 0.154) 89.15%
    ),
    #caf0f8;

  position: relative;
  min-height: 646.4px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
  @media (max-width: 450px) {
    margin: 0 1rem;
  }
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const RoleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

export const Name = styled.div`
  padding: 2px;
  max-width: 12ch;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  /* identical to box height */
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const ByLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height */
  text-align: center;
  /* identical to box height */
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 0px 0px;
`;
export const Role = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
`;
export const Organization = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;

  /* Inside auto layout */
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  /* identical to box height */
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
`;

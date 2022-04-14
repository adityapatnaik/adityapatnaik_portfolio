import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";

const NextIcon = styled.div`
  position: fixed;
  bottom: 5%;
  right: 10%;
  font-size: 2rem;
`;

const NextArrowHOC = (props) => {
  return (
    <Fragment>
      {props.children}
      <NextIcon>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={props.link}
          key={props.link}
        >
          <BsArrowRightCircle />
        </Link>
      </NextIcon>
    </Fragment>
  );
};

export default NextArrowHOC;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <>
      <FooterCont>
        <Title>
          <a href="https://wasif.codes" style={{ textDecoration: "none" }}>
            Muhammad Wasif
          </a>
        </Title>
        <Links>
          <Link to="/about" style={{ marginRight: 8 }}>
            About this Site
          </Link>
          <Link to={""}>&copy; {new Date().getFullYear()}</Link>
        </Links>
      </FooterCont>
    </>
  );
}

export default Footer;

const FooterCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Playfair Display";
  font-size: large;
`;

const Links = styled.div`
  margin-left: auto;
`;

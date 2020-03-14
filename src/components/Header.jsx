import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LayoutConatiner(props) {
  return (
    <Header>
      <div>
        <Link to="/">
          <Title>Muhammad Wasif</Title>
        </Link>
      </div>
      <LinkContainer>
        <LinkIcon href="https://github.com/MuhammadWasif">
          <i className="fab fa-github" style={{ fontSize: 20 }}></i>
        </LinkIcon>
        <LinkIcon href="https://twitter.com/m_wasif_">
          {" "}
          <i
            className="fab fa-twitter"
            style={{ fontSize: 20, color: "#00acee" }}
          ></i>
        </LinkIcon>
        <LinkIcon href="https://www.linkedin.com/in/muhammad-wasif/">
          {" "}
          <i
            className="fab fa-linkedin"
            style={{ fontSize: 20, color: "#0e76a8" }}
          ></i>
        </LinkIcon>
      </LinkContainer>
    </Header>
  );
}

export default LayoutConatiner;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: large;
  color: #333;
`;

const LinkContainer = styled.div`
  margin-left: auto;
`;

const LinkIcon = styled.a`
  color: #333;
  font-size: medium;
  padding: 0px 4px;
`;

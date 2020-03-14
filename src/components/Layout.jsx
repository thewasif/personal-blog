import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <FlexContainer>
      <Header />
      {props.children}
      <Footer />
    </FlexContainer>
  );
}

export default Layout;

const FlexContainer = styled.div`
  padding: 4px 6px;
`;

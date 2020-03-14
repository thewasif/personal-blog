import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const {
    title,
    cover_image,
    published_date,
    id,
    description,
    profilepic
  } = props;
  const link = `/post/${id}`;
  return (
    <Link to={link}>
      <Card>
        <Cover>
          <Image src={cover_image} alt="" />
        </Cover>
        <Body>
          <Title>{title}</Title>
          <Line></Line>
          <Extras>
            <p style={{ fontSize: "medium", opacity: 0.7, fontFamily: "Lora" }}>
              {description}
            </p>
          </Extras>
          <hr width="80%" style={{ color: "black", opacity: 0.1 }} />
          <UserCont>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundImage: `url("${profilepic}")`,
                backgroundSize: "cover",
                marginRight: 8
              }}
            ></div>
            <p style={{ fontSize: "small", textTransform: "uppercase" }}>
              Muhammad Wasif - {published_date}
            </p>
          </UserCont>
        </Body>
      </Card>
    </Link>
  );
}
const UserCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Cover = styled.div``;

const Body = styled.div`
  padding: 2px 6px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: large;
  text-align: left;
  font-family: "Roboto";
`;
const Line = styled.div`
  background: #333;
  width: 30px;
  height: 2px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Extras = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lora";
`;

export default BlogCard;

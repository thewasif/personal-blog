import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
import Layout from "../components/Layout";

function Home(props) {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=muhammadwasif").then(e => {
      e.json().then(res => {
        let fetchedBlogs = res;
        setBlogs(fetchedBlogs);
      });
    });
  }, [blogs]);
  return (
    <Layout>
      <div>
        <Title>Welcome to my Blog</Title>
        <SubTitle>I love to share my experiences, here.</SubTitle>
        <BlogContainer>
          {blogs.map(blog => {
            if (blog.cover_image) {
              return (
                <BlogCard
                  key={blog.title}
                  title={blog.title}
                  cover_image={blog.cover_image}
                  description={blog.description}
                  tags={blog.tag_list}
                  published_date={blog.readable_publish_date}
                  id={blog.id}
                  profilepic={blog.user.profile_image}
                />
              );
            }
            return <React.Fragment key={blog.title}></React.Fragment>;
          })}
        </BlogContainer>
      </div>
    </Layout>
  );
}

const BlogContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;
const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: large;
  font-family: "Open Sans";
`;

export default Home;

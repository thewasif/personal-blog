import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

let tweetHref = `https://twitter.com/intent/tweet?text=Check out this article by @m_wasif_&url=${window.location.href}`;
let fbHref = `http://www.facebook.com/sharer.php?u=${window.location.href}`;
let linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;

function Post(props) {
  let [blog, setBlog] = useState({});
  let { slug } = useParams();

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${slug}`).then(e => {
      e.json().then(res => {
        let fetchedBlog = res;
        setBlog(fetchedBlog);
      });
    });
  }, [slug]);
  return (
    <Layout>
      <div className="post-container">
        <div className="likes-container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <i
              className="fa fa-heart"
              style={{ color: "#ff4444", textAlign: "center", fontSize: 20 }}
            ></i>
            <p style={{ textAlign: "center", marginLeft: 4, fontSize: 20 }}>
              {blog.positive_reactions_count}
            </p>
          </div>
          <div
            className="share"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a href={tweetHref}>
                <i
                  className="fab fa-twitter"
                  style={{
                    color: "#00acee",
                    textAlign: "center",
                    fontSize: 20,
                    padding: 4
                  }}
                ></i>
              </a>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a href={fbHref}>
                <i
                  className="fab fa-facebook"
                  style={{
                    color: "#1778F2",
                    textAlign: "center",
                    fontSize: 20,
                    padding: 4
                  }}
                ></i>
              </a>
              <p></p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a href={linkedInHref}>
                <i
                  className="fab fa-linkedin"
                  style={{
                    color: "#006192",
                    textAlign: "center",
                    fontSize: 20,
                    padding: 4
                  }}
                ></i>
              </a>
              <p></p>
            </div>
          </div>
        </div>
        <div className="post">
          <img src={blog.cover_image} alt="cover" />
          <h1>{blog.title}</h1>
          <div className="article">{ReactHtmlParser(blog.body_html)}</div>
        </div>
        <div className="card-container">
          <ProfileCard />
        </div>
      </div>
    </Layout>
  );
}

export default Post;

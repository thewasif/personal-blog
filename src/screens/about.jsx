import React from "react";
import Layout from "../components/Layout";
function About(props) {
  return (
    <>
      <Layout>
        <div
          style={{
            height: "90vh"
          }}
        >
          <h1>This website is created using</h1>
          <ul>
            <li>React</li>
            <li>DEV.to API</li>
          </ul>
          <h3>More:</h3>
          <ul>
            <li>
              Source Code on <b>GitHub</b>
            </li>
            <li>
              Hosting on <b>Netlify</b>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}

export default About;

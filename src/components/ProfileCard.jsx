import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div className="wrapper">
        <div className="profile">
          <img
            src="https://avatars2.githubusercontent.com/u/26650374?s=460&u=1171a341daa83e11d85d79b73676ab07c0eb6e8d&v=4"
            className="thumbnail"
            alt="muhammad wasif"
          />

          <h3 className="name">Muhammad Wasif</h3>
          <p className="title">
            Google Code-In 2019 Runner Up | JavaScript Developer{" "}
          </p>
          <p className="description">
            I love to create stuff and find solutions with JavaScript, React &
            JAMstack. I usually write to share my experiences with the world
          </p>
        </div>

        <div className="social-icons">
          <div className="icon">
            <a
              href="https://github.com/MuhammadWasif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://dev.to/muhammadwasif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-dev"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://twitter.com/m_wasif_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/muhammad-wasif/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <div className="icon">
            <a
              href="https://www.facebook.com/m.wasif.628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

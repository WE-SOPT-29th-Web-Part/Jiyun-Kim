import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Profile from "./Profile";
import ResultFooter from "./ResultFooter";
import ResultHeader from "./ResultHeader";

const Card = ({ userInfo, onClose }) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    blog,
    company,
    html_url,
    followers,
    following,
    public_repos,
  } = userInfo.data;

  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);
  const handleClose = () => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 1,
      },
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      }
    );
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <Root ref={cardRef}>
      <ResultHeader htmlUrl={html_url} onClose={handleClose} />
      <img src={avatar_url} alt='avatar' />
      <StyledProfile>
        <Profile
          avatarUrl={avatar_url}
          name={name}
          login={login}
          bio={bio}
          blog={blog}
          company={company}
        ></Profile>
        <ResultFooter
          followers={followers}
          following={following}
          publicRepos={public_repos}
        ></ResultFooter>
      </StyledProfile>
    </Root>
  );
};

const Root = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  color: rgb(45, 47, 49);
  background-color: rgb(251, 251, 253);
  width: 32%;
  padding: 20px;
  border-radius: 30px;
  position: relative;
  /* animation: slideDown 400ms ease-in 0s 1 normal forwards; */

  @keyframes slideDown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 30px;
  }
`;

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Card;

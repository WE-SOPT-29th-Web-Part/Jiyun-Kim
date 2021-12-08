import React from "react";
import styled from "styled-components";
import SoptImg from "../../assets/images/29_sopt.png";

const Profile = () => {
  return (
    <StyledProfile>
      <StyledProfileInfo>
        <img src={SoptImg} alt='profileImg' />
        <StyledProfileName>
          <h2>Jiyun Kim</h2>
          <h3>꼬맹이 거인 개발자</h3>
        </StyledProfileName>
      </StyledProfileInfo>
      <footer></footer>
    </StyledProfile>
  );
};

const StyledProfile = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  & > footer {
    margin-top: 32px;
    margin-bottom: 24px;
    background-color: rgb(233, 236, 239);
    height: 1px;
    width: 100%;
  }
`;

const StyledProfileInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 90px;
  & > img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
`;

const StyledProfileName = styled.div`
  margin-left: 16px;
  & > h2 {
    color: rgb(52, 58, 64);
    font-size: 1.5rem;
    font-weight: bold;
  }

  & > h3 {
    margin-top: 0.25rem;
    color: rgb(73, 80, 87);
    font-size: 1.125rem;
    font-weight: normal;
  }
`;

export default Profile;

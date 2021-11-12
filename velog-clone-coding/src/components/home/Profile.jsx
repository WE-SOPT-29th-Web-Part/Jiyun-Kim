import React from 'react';
import styled from 'styled-components';
import SoptImg from '../../assets/images/29_sopt.png';

const Profile = () => {
    return (
        <StyledProfile>
            <StyledProfileInfo>
                <img className="profile__img" src={SoptImg} alt="profileImg" />
                <StyledProfileName>
                    <div className="profile__name">Jiyun Kim</div>
                    <div className="profile__nickname">꼬맹이 거인 개발자</div>
                </StyledProfileName>
            </StyledProfileInfo>
                <div className="profile__bottom"></div>
        </StyledProfile>
    );
};

const StyledProfile = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    & > .profile__bottom {
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
    & > .profile__name {
        color: rgb(52, 58, 64);
        font-size: 1.5rem;
        font-weight: bold;
    }

    & > .profile__nickname {
        margin-top: 0.25rem;
        color: rgb(73, 80, 87);
        font-size: 1.125rem;
    }
`;

export default Profile;
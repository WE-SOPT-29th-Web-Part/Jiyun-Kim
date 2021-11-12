import React from 'react';
import PendingResult from './PendingResult';
import RejectedResult from './RejectedResult';
import Card from './Card';

const Result = ({userInfo, setUserInfo}) => {
    //idle일 때 아무것도 안보여줌
    //pending 일 때 로딩 중 보여줌
    //rejected 일 때 사용자가 없습니다 보여줌
    //resolved일 때 card 보여줌
    switch(userInfo.status) {
        case "idle":
            return <></>;
        case "pending":
            return <PendingResult />;
        case "resolved":
            return <Card
                userInfo={userInfo}
                setUserInfo={setUserInfo}
            />;
        case "rejected":
            return <RejectedResult />;
        default:
            return <></>;
    }
};

export default Result;

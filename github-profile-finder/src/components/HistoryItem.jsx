import React, { useEffect } from "react";
import { callUserData } from "../libs/githubApi";
import styled from "styled-components";
import { gsap } from "gsap";

const HistoryItem = ({ item, history, setHistory, handleStatus }) => {
  const handleHistory = () => {
    handleStatus({ status: "pending" });
    callUserData(item).then((response) => {
      onSetUserInfo(response);
    });
  };

  const onSetUserInfo = (data) => {
    const status = data ? "resolved" : "rejected";
    handleStatus({ data, status });
  };

  const handleDelete = () => {
    setHistory(history.filter((historyItem) => historyItem !== item));
  };

  useEffect(() => {
    showHistoryItem();
  }, [history]);

  const showHistoryItem = () => {
    gsap.fromTo(
      ".history__item",
      {
        x: -50,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.3,
      }
    );
  };

  return (
    <StyledLi className='history__item'>
      <span onClick={handleHistory}>{item}</span>
      <button onClick={handleDelete}>X</button>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  padding: 8px 16px;
  background-color: rgb(229, 230, 231);
  color: rgb(36, 39, 43);
  border-radius: 30px;
  margin-right: 5px;
  opacity: 0;

  & > span {
    cursor: pointer;
  }

  & > button {
    border: 0;
    background-color: rgb(229, 230, 231);
    color: rgb(36, 39, 43);
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`;

export default HistoryItem;

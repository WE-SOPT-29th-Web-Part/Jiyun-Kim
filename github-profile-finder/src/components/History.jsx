import React, { useEffect } from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { setLocalStorage } from "../libs/localStorage.js";

const History = ({ history, setHistory, handleStatus }) => {
  useEffect(() => {
    setLocalStorage({ key: "history", value: history });
  }, [history]);

  return (
    <RootStyled>
      {history.map((item) => {
        return (
          <HistoryItem
            key={item}
            item={item}
            history={history}
            setHistory={setHistory}
            handleStatus={handleStatus}
          />
        );
      })}
    </RootStyled>
  );
};

const RootStyled = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  color: white;
`;

export default History;

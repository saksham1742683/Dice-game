import { useState } from "react";
import styled from "styled-components";

function NumberSelector({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  //   console.log(selectedNumber)
  const clickHandler
   = (value) => {
    setError("");
    setSelectedNumber(value);
  };

  return (
    <NumberSelectorContainer>
      <p className=" err"> {error} </p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={selectedNumber === value}
            key={i}
            onClick={() => clickHandler
              (value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p> Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .err {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;

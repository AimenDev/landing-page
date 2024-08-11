import React from "react";
import styled from "styled-components";
export default function Button({ text, blue = false }) {
  return (
    <Div>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </Div>
  );
}

const Div = styled.div`
  button {
    border-radius: 4rem;
    padding: 0.8rem 2rem;
    background-color: transparent; /* Default to transparent background */
    border: 1px solid white; /* Set a white border */
    color: white;
    font-size: 1.1rem;
    cursor: pointer;

    &.blue {
      background-color: #2d69fd; 
      border: none; 
    }
  }
`;

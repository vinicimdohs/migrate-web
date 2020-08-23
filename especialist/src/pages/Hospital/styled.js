import styled from "styled-components";

export const Title = styled.div`
  background-color: #2d2c2c;
  color: white;
  margin-top: -20px;
  padding-top: 10px;
  h2 {
    text-align: center;
    margin-top: 0;
    padding-bottom: 20px;
  }
  a {
    margin: 20px;
    display: flex;
    justify-content: center;
    height: 35px;
    width: 80px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  grid-gap: 20px;
  margin: 30px;
`;

export const Container = styled.div`
  height: 100%;
  margin-right: 20px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 50px;
  div {
    margin-top: 15px;
    margin-right: 15px;
    margin-left: 15px;
  }
  input:not([type]),
  input[type="search"] {
    border: 1px solid lightgray;
    border-radius: 50px;
    width: 100%;
    background-color: #2198f6;
  }
`;

export const Line = styled.div`
  height: 2px;
  background-color: #2d2c2c;
`;

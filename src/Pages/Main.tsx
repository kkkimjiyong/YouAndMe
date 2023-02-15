import React from "react";
import styled from "styled-components";
import { Layout } from "../Layout/Layout";

export const Main = () => {
  return (
    <Layout>
      <Wrap>
        <Title>
          <span className="you"> You </span> ... <span className="me">Me</span>
        </Title>
        <SingBtn>KaKao</SingBtn>
        <SingBtn className="signup">Sign Up</SingBtn>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #1f0435;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-top: 80px;
  margin-bottom: 40px;
  .you {
    color: #cb37ae;
  }
  .me {
    color: #7dbef7;
  }
`;

const SingBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  border-radius: 40px;
  width: 250px;
  height: 50px;
  background-color: #cb37ae;
  color: white;
  margin-bottom: 20px;
  &.signup {
    color: #cb37ae;
    background-color: white;
  }
  :hover {
    cursor: pointer;
  }
`;

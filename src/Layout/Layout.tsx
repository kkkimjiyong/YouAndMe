import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: any }) => {
  return <Wrap> {children}</Wrap>;
};

const Wrap = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
`;

import React from "react";
import styled from "styled-components";

interface Props {
  header: String;
  pageNumber: String;
}

export default function InputHeader(props: Props) {
  const { header, pageNumber } = props;

  return (
    <InputHeadingContainer>
      <InputHeading>{header}</InputHeading>
      <HeaderParahraph>{pageNumber}</HeaderParahraph>
    </InputHeadingContainer>
  );
}

const InputHeadingContainer = styled.div`
  width: 100%;
  border-bottom: 1.3px solid #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`;

const InputHeading = styled.h2`
  font-family: "HelveticaNeue";
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
`;

const HeaderParahraph = styled.p`
  font-family: "HelveticaNeue";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
`;

import React from "react";
import styled from "styled-components";

interface Props {
  main: string;
  placeholder: string;
}

export default function InputTextArea(props: Props) {
  const { main, placeholder } = props;

  return (
    <PersonInputContainer>
      <InputName>{main}</InputName>
      <AboutInput placeholder={placeholder} />
    </PersonInputContainer>
  );
}

const PersonInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const InputName = styled.h4`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
`;

const AboutInput = styled.textarea`
  height: 100px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding: 13px 16px;
  resize: none;
`;

import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  main: string;
  placeholder?: string;
  hint?: string;
  type: string;
  name?: string | "";
}

export default function NamesInput(props: Props) {
  const { main, placeholder, hint, type } = props;

  const [name, setName] = useState("");

  function handleChange(event: any) {
    setName(event.target.value);
  }

  return (
    <PersonInputContainer>
      <InputName>{main}</InputName>
      <NameInputField
        type={type}
        placeholder={placeholder}
        value={name}
        onChange={handleChange}
      />
      {hint ? <NamesHint>{hint}</NamesHint> : ""}
    </PersonInputContainer>
  );
}

const PersonInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const InputName = styled.h4`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
`;

const NameInputField = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  font-family: "HelveticaNeue";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding: 13px 16px 14px 16px;
`;

const NamesHint = styled.span`
  font-family: "HelveticaNeue";
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;

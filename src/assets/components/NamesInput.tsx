import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ok from "../images/ok.png";
import error from "../images/error.png";

interface Props {
  main: string;
  placeholder?: string;
  hint?: string;
  type: string;
  name?: string | "";
  onChange: any;
  value: any;
  invalid?: boolean;
  id?: string;
}

export default function NamesInput(props: Props) {
  const { main, placeholder, hint, type, onChange, value, invalid, id } = props;

  return (
    <PersonInputContainer>
      <InputName>{main}</InputName>
      <NameInputField
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
        required
      />

      {invalid && <ErrorImage src={error} />}

      {hint ? <NamesHint>{hint}</NamesHint> : ""}
    </PersonInputContainer>
  );
}

//პირადი ინფორმაციის ინფუთების კომპონენტის დასაწყისი

const PersonInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  position: relative;
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

  padding: 13px 16px 14px 16px;
`;

const NamesHint = styled.span`
  font-family: "HelveticaNeue";
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;

//პირადი ინფორმაციის ინფუთების კომპონენტის დასასრული

const OkImage = styled.img`
  position: absolute;
  right: 10px;
`;

const ErrorImage = styled.img`
  position: absolute;
  right: -30px;
  top: 40px;
`;

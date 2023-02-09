import styled from "styled-components";
import InputHeader from "../components/InputHeader";
import { Link } from "react-router-dom";
import NamesInput from "../components/NamesInput";
import InputTextArea from "../components/InputTextArea";
import MainoutputCv from "../components/WholeCV";
import { useState } from "react";

export default function PersonalInfo() {
  const [name, setName] = useState("");

  return (
    <PersonalContainer>
      <MainInput>
        <GoBack to="/">&#60;</GoBack>
        <InputInfo>
          <InputHeader header={"ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"} pageNumber={"1/3"} />
          <PersonNamesContainer>
            <NamesInput
              main={"სახელი"}
              placeholder={"ანზორ"}
              hint={"მინიმუმ 2 ასო, ქართული ასოები"}
              type={"text"}
            />
            <NamesInput
              main={"გვარი"}
              placeholder={"მუმლაძე"}
              hint={"მინიმუმ 2 ასო, ქართული ასოები"}
              type={"text"}
            />
          </PersonNamesContainer>
          <PictureFieldContainer>
            <InputName>პირადი ფოტოს ატვირთვა</InputName>
            <SelectPhoto>ატვირთვა</SelectPhoto>
          </PictureFieldContainer>
          <InputTextArea
            main={"ჩემ შესახებ (არასავალდებულო)"}
            placeholder={"ზოგადი ინფო შენ შესახებ"}
          />
          <PersonInputContainer>
            <InputName>ელ.ფოსტა</InputName>
            <ContactInput type="email" placeholder="anzorr666@redberry.ge" />
            <NamesHint>უნდა მთავრდებოდეს @redberry.ge-ით</NamesHint>
          </PersonInputContainer>
          <PersonInputContainer>
            <InputName>მობილურის ნომერი</InputName>
            <ContactInput type="text" placeholder="+995 551 12 34 56" />
            <NamesHint>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </NamesHint>
          </PersonInputContainer>
          <NextPageButton to="experience">ᲨᲔᲛᲓᲔᲒᲘ</NextPageButton>
        </InputInfo>
      </MainInput>
      <MainOutput>
        <MainoutputCv name={name} />
      </MainOutput>
    </PersonalContainer>
  );
}

const GoBack = styled(Link)`
  font-family: "HelveticaNeue";
  font-size: 20px;
  height: 40px;
  width: 40px;
  text-decoration: none;
  align-self: flex-start;
  text-align: center;
  margin: 15px 20px 0px 20px;
  height: 30px;
  width: 40px;
  border-radius: 100px;
  border: none;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const PersonalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const MainInput = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 90px 30px 0px;
  height: 100vh;
  width: 100vw;
`;

const InputInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 45px;
`;

const MainOutput = styled.div`
  height: 100%;
  width: 100vw;
`;

const PersonNamesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
  box-sizing: border-box;
`;

const PersonInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  gap: 8px;
`;

const InputName = styled.h4`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
`;

const NameInputField = styled.input`
  height: 40px;
  width: 370px;
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

const PictureFieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SelectPhoto = styled.button`
  height: 30px;
  width: 160px;
  border-radius: 4px;
  background-color: #0e80bf;
  color: #ffffff;
  text-align: center;
  border: none;

  &:hover {
    background-color: #02527d;
    cursor: pointer;
  }
`;

const ContactInput = styled.input`
  height: 40px;
  width: 100%;
  left: 24px;
  top: 37px;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  padding: 13px 16px;
`;

const NextPageButton = styled(Link)`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 48px;
  width: 150px;
  border-radius: 4px;
  border: none;
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  background: #6b40e3;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;

  &:hover {
    background: #7949ff;
    cursor: pointer;
  }
`;

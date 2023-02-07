import styled from "styled-components";
import InputTextArea from "./InputTextArea";
import NamesInput from "./NamesInput";

export default function ExperienceComponent() {
  return (
    <ExperienceComponentContainer>
      <NamesInput
        main={"თანამდებობა"}
        placeholder={"დეველოპერი, დიზაინერი, ა.შ."}
        hint={"მინიმუმ 2 სიმბოლო"}
        type={"text"}
      />
      <NamesInput
        main={"დამსაქმებელი"}
        placeholder={"დამსაქმებელი"}
        hint={"მინიმუმ 2 სიმბოლო"}
        type={"text"}
      />
      <StartEndDatesContainer>
        <NamesInput main={"დაწყების რიცხვი"} type={"date"} />
        <NamesInput main={"დამთავრების რიცხვი"} type={"date"} />
      </StartEndDatesContainer>
      <InputTextArea
        main={"აღწერა"}
        placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
      />
      <HorisontalLine></HorisontalLine>
    </ExperienceComponentContainer>
  );
}

const HorisontalLine = styled.div`
  border-bottom: 1px solid #c1c1c1;
`;

const ExperienceComponentContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 26px;
`;

const StartEndDatesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;
`;

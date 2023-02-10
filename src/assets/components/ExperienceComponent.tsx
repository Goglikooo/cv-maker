import styled from "styled-components";
import InputTextArea from "./InputTextArea";
import NamesInput from "./NamesInput";
import removebutton from "../images/x.png";

interface Props {
  onChangeName: any;
  onChangeEmployer: any;
  onChangeStartDate: any;
  onChangeEndDate: any;
  positionValue: any;
  employerValue: any;
  startDateValue: any;
  endDateValue: any;
  textAreaValue: any;
  aboutJob: any;
}

export default function ExperienceComponent(props: Props) {
  const {
    onChangeName,
    onChangeEmployer,
    onChangeStartDate,
    onChangeEndDate,
    positionValue,
    startDateValue,
    employerValue,
    endDateValue,
    textAreaValue,
    aboutJob,
  } = props;

  return (
    <ExperienceComponentContainer>
      <NamesInput
        main={"თანამდებობა"}
        placeholder={"დეველოპერი, დიზაინერი, ა.შ."}
        hint={"მინიმუმ 2 სიმბოლო"}
        type={"text"}
        onChange={onChangeName}
        value={positionValue}
      />
      <NamesInput
        main={"დამსაქმებელი"}
        placeholder={"დამსაქმებელი"}
        hint={"მინიმუმ 2 სიმბოლო"}
        type={"text"}
        onChange={onChangeEmployer}
        value={employerValue}
      />
      <StartEndDatesContainer>
        <NamesInput
          main={"დაწყების რიცხვი"}
          type={"date"}
          onChange={onChangeStartDate}
          value={startDateValue}
        />
        <NamesInput
          main={"დამთავრების რიცხვი"}
          type={"date"}
          onChange={onChangeEndDate}
          value={endDateValue}
        />
      </StartEndDatesContainer>
      <InputTextArea
        main={"აღწერა"}
        placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
        onChange={aboutJob}
        textAreaValue={textAreaValue}
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

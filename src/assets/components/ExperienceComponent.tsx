import styled from "styled-components";
import InputTextArea from "./InputTextArea";
import NamesInput from "./NamesInput";
import error from "../images/error.png";

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
  invalidPosition?: boolean;
  invalidEmployer?: boolean;
  experienceStartDate?: boolean;
  experienceEndDate?: boolean;
  textAreaRequired?: boolean;
  positionId?: string;
  employerId?: string;
  startDateId?: string;
  endDateId?: string;
  jobAboutId?: string;
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
    invalidPosition,
    invalidEmployer,
    experienceStartDate,
    experienceEndDate,
    textAreaRequired,
    positionId,
    employerId,
    startDateId,
    endDateId,
    jobAboutId,
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
        invalid={invalidPosition}
        id={positionId}
      />

      <NamesInput
        main={"დამსაქმებელი"}
        placeholder={"დამსაქმებელი"}
        hint={"მინიმუმ 2 სიმბოლო"}
        type={"text"}
        onChange={onChangeEmployer}
        value={employerValue}
        invalid={invalidEmployer}
        id={employerId}
      />
      <StartEndDatesContainer>
        <StartDate>
          <NamesInput
            main={"დაწყების რიცხვი"}
            type={"date"}
            onChange={onChangeStartDate}
            value={startDateValue}
            id={startDateId}
          />
          {experienceStartDate && <ErrorImage src={error} />}
        </StartDate>
        <StartDate>
          <NamesInput
            main={"დამთავრების რიცხვი"}
            type={"date"}
            onChange={onChangeEndDate}
            value={endDateValue}
            id={endDateId}
          />
          {experienceEndDate && <ErrorImage src={error} />}
        </StartDate>
      </StartEndDatesContainer>
      <InputTextArea
        main={"აღწერა"}
        placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
        onChange={aboutJob}
        textAreaValue={textAreaValue}
        textAreaRequired={textAreaRequired}
        id={jobAboutId}
      />
      <HorisontalLine></HorisontalLine>
    </ExperienceComponentContainer>
  );
}

const StartDate = styled.label`
  width: 100%;
  position: relative;
`;

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

const ErrorImage = styled.img`
  position: absolute;
  right: -30px;
  top: 40px;
`;

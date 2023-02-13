import React from "react";
import styled from "styled-components";
import ExperienceComponent from "../components/ExperienceComponent";
import PageHeader from "../components/PageHeader";

interface Props {
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  setEmployer: React.Dispatch<React.SetStateAction<string>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setExperienceStartdate: React.Dispatch<React.SetStateAction<boolean>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setExperienceEnddate: React.Dispatch<React.SetStateAction<boolean>>;
  setAboutJob: React.Dispatch<React.SetStateAction<string>>;
  setTextAreaRequired: React.Dispatch<React.SetStateAction<boolean>>;
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  aboutJob: string;
  invalidPosition: boolean;
  invalidEmployer: boolean;
  experienceStartdate: boolean;
  experienceEnddate: boolean;
  textAreaRequired: boolean;
  addMoreExperienceField: boolean;
  addMoreExperienceFunction: any;
  setPosition2: React.Dispatch<React.SetStateAction<string>>;
  setEmployer2: React.Dispatch<React.SetStateAction<string>>;
  position2: string;
  employer2: string;
  startDate2: string;
  setStartDate2: React.Dispatch<React.SetStateAction<string>>;
  endDate2: string;
  setEndDate2: React.Dispatch<React.SetStateAction<string>>;
  aboutJob2: string;
  setAboutJob2: React.Dispatch<React.SetStateAction<string>>;
  invalidPosition2: boolean;
  invalidEmployer2: boolean;
  experienceStartdate2: boolean;
  setExperienceStartdate2: React.Dispatch<React.SetStateAction<boolean>>;
  experienceEnddate2: boolean;
  setExperienceEnddate2: React.Dispatch<React.SetStateAction<boolean>>;
  textAreaRequired2: boolean;
  setTextAreaRequired2: React.Dispatch<React.SetStateAction<boolean>>;
  goBack1: any;
  handleNextPageEducation: any;
}

export default function ExperiencePage(props: Props) {
  const {
    setPosition,
    setEmployer,
    setStartDate,
    setExperienceStartdate,
    setEndDate,
    setExperienceEnddate,
    setAboutJob,
    setTextAreaRequired,
    position,
    employer,
    startDate,
    endDate,
    aboutJob,
    invalidPosition,
    invalidEmployer,
    experienceStartdate,
    experienceEnddate,
    textAreaRequired,
    addMoreExperienceField,
    addMoreExperienceFunction,
    setPosition2,
    setEmployer2,
    position2,
    employer2,
    startDate2,
    setStartDate2,
    endDate2,
    setEndDate2,
    aboutJob2,
    setAboutJob2,
    invalidPosition2,
    invalidEmployer2,
    experienceStartdate2,
    setExperienceStartdate2,
    experienceEnddate2,
    setExperienceEnddate2,
    textAreaRequired2,
    setTextAreaRequired2,
    goBack1,
    handleNextPageEducation,
  } = props;

  return (
    <PersonalContainerExperience>
      <InputInfo>
        <PageHeader header="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" pageNumber="2/3" link={"/"} />

        <ExperienceContainer>
          <ExperienceComponent
            onChangeName={(e: any) => {
              setPosition(e.target.value);
            }}
            onChangeEmployer={(e: any) => {
              setEmployer(e.target.value);
            }}
            onChangeStartDate={(e: any) => {
              setStartDate(e.target.value);
              setExperienceStartdate(false);
            }}
            onChangeEndDate={(e: any) => {
              setEndDate(e.target.value);
              setExperienceEnddate(false);
            }}
            aboutJob={(e: any) => {
              setAboutJob(e.target.value);
              setTextAreaRequired(false);
            }}
            positionValue={position}
            employerValue={employer}
            startDateValue={startDate}
            endDateValue={endDate}
            textAreaValue={aboutJob}
            invalidPosition={invalidPosition}
            invalidEmployer={invalidEmployer}
            experienceStartDate={experienceStartdate}
            experienceEndDate={experienceEnddate}
            textAreaRequired={textAreaRequired}
            positionId={"positionId1"}
            employerId={"employerId1"}
            startDateId={"startDateId1"}
            endDateId={"endDateId1"}
            jobAboutId={"jobAboutId1"}
          />
          {addMoreExperienceField ? (
            ""
          ) : (
            <AddMoreExperiencebutton onClick={addMoreExperienceFunction}>
              მეტი გამოცდილების დამატება
            </AddMoreExperiencebutton>
          )}
        </ExperienceContainer>
        {addMoreExperienceField && (
          <ExperienceContainer>
            <ExperienceComponent
              onChangeName={(e: any) => {
                setPosition2(e.target.value);
              }}
              onChangeEmployer={(e: any) => {
                setEmployer2(e.target.value);
              }}
              onChangeStartDate={(e: any) => {
                setStartDate2(e.target.value);
                setExperienceStartdate2(false);
              }}
              onChangeEndDate={(e: any) => {
                setEndDate2(e.target.value);
                setExperienceEnddate2(false);
              }}
              aboutJob={(e: any) => {
                setAboutJob2(e.target.value);
                setTextAreaRequired2(false);
              }}
              positionValue={position2}
              employerValue={employer2}
              startDateValue={startDate2}
              endDateValue={endDate2}
              textAreaValue={aboutJob2}
              invalidPosition={invalidPosition2}
              invalidEmployer={invalidEmployer2}
              experienceStartDate={experienceStartdate2}
              experienceEndDate={experienceEnddate2}
              textAreaRequired={textAreaRequired2}
              positionId={"positionId2"}
              employerId={"employerId2"}
              startDateId={"startDateId2"}
              endDateId={"endDateId2"}
              jobAboutId={"jobAboutId2"}
            />
          </ExperienceContainer>
        )}
      </InputInfo>
      <BackOrNextContainer>
        <BackButton onClick={goBack1}>ᲣᲙᲐᲜ</BackButton>
        <ForwardButton onClick={handleNextPageEducation}>ᲨᲔᲛᲓᲔᲒᲘ</ForwardButton>
      </BackOrNextContainer>
    </PersonalContainerExperience>
  );
}

const PersonalContainerExperience = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  padding-bottom: 30px;
`;

const InputInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 45px;
  background-color: #f9f9f9;
  margin-bottom: 80px;
  position: relative;
`;

const ExperienceContainer = styled.div`
  position: relative;
  width: 100%;
  border: none;
`;

const AddMoreExperiencebutton = styled.button`
  height: 48px;
  width: 289px;
  border-radius: 4px;
  border: none;
  background: #62a1eb;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: #5195e3;
  }
`;

const BackOrNextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const BackButton = styled.button`
  height: 48px;
  width: 113px;
  background: #6b40e3;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const ForwardButton = styled.button`
  height: 48px;
  width: 151px;
  background: #6b40e3;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

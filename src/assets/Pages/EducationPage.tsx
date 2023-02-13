import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputTextArea from "../components/InputTextArea";
import NamesInput from "../components/NamesInput";
import PageHeader from "../components/PageHeader";
import arrowdown from "../images/down-arrow.png";
import error from "../images/error.png";

interface Degrees {
  id: number | any;
  title: string;
}

interface Props {
  universityName: string;
  setUniversityName: React.Dispatch<React.SetStateAction<string>>;
  universityNameError: boolean;
  setShowDegree: React.Dispatch<React.SetStateAction<boolean>>;
  showDegree: boolean;
  selectedDegree: string;
  selectedDegreeError: boolean;
  degree: Degrees[] | null;
  setselectedDegree: React.Dispatch<React.SetStateAction<string>>;
  setselectedDegreeError: React.Dispatch<React.SetStateAction<boolean>>;
  setUniversityEndDate: React.Dispatch<React.SetStateAction<string>>;
  setUniversityEndDateError: React.Dispatch<React.SetStateAction<boolean>>;
  universityEndDate: string;
  universityEndDateError: boolean;
  setUniversityDescription: React.Dispatch<React.SetStateAction<string>>;
  setUniversityDescriptionError: React.Dispatch<React.SetStateAction<boolean>>;
  unviersityDescriptionError: boolean;
  universityDescription: string;
  addMoreEducation: boolean;
  setAddMoreEducation: React.Dispatch<React.SetStateAction<boolean>>;
  universityName2: string;
  setUniversityName2: React.Dispatch<React.SetStateAction<string>>;
  universityNameError2: boolean;
  setShowDegree2: React.Dispatch<React.SetStateAction<boolean>>;
  showDegree2: boolean;
  selectedDegree2: string;
  selectedDegreeError2: boolean;
  degree2: Degrees[] | null;
  setselectedDegree2: React.Dispatch<React.SetStateAction<string>>;
  setselectedDegreeError2: React.Dispatch<React.SetStateAction<boolean>>;
  setUniversityEndDate2: React.Dispatch<React.SetStateAction<string>>;
  setUniversityEndDateError2: React.Dispatch<React.SetStateAction<boolean>>;
  universityEndDate2: string;
  universityEndDateError2: boolean;
  setUniversityDescription2: React.Dispatch<React.SetStateAction<string>>;
  setUniversityDescriptionError2: React.Dispatch<React.SetStateAction<boolean>>;
  unviersityDescriptionError2: boolean;
  universityDescription2: string;
  goBack2: any;
  sendFinalResult: any;
  setDegreeIndex?: any;
}

export default function EducationPage(props: Props) {
  const {
    universityName,
    setUniversityName,
    universityNameError,
    setShowDegree,
    showDegree,
    selectedDegree,
    selectedDegreeError,
    degree,
    setselectedDegree,
    setselectedDegreeError,
    setUniversityEndDate,
    setUniversityEndDateError,
    universityEndDate,
    universityEndDateError,
    setUniversityDescription,
    setUniversityDescriptionError,
    unviersityDescriptionError,
    universityDescription,
    addMoreEducation,
    setAddMoreEducation,
    universityName2,
    setUniversityName2,
    universityNameError2,
    setShowDegree2,
    showDegree2,
    selectedDegree2,
    selectedDegreeError2,
    degree2,
    setselectedDegree2,
    setselectedDegreeError2,
    setUniversityEndDate2,
    setUniversityEndDateError2,
    universityEndDate2,
    universityEndDateError2,
    setUniversityDescription2,
    setUniversityDescriptionError2,
    unviersityDescriptionError2,
    universityDescription2,
    goBack2,
    sendFinalResult,
    setDegreeIndex,
  } = props;

  useEffect(() => {}, [degree]);

  return (
    <InputInfo>
      <PageHeader header="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" pageNumber="3/3" link={"/"} />

      <NamesInput
        main={"სასწავლებელი"}
        placeholder={"სასწავლებელი"}
        hint={"მინიმუმ 2 სიმბოლო"}
        type={"text"}
        value={universityName}
        onChange={(e: any) => {
          setUniversityName(e.target.value);
        }}
        invalid={universityNameError}
      />

      {/* აქ იწყება ედუქეიშენ კომპონენტი!  */}
      <EducationContainer>
        <DegreeDiv>
          <DegreeName>ხარისხი</DegreeName>
          <DegreeOptionsContainer
            onClick={() => {
              setShowDegree(!showDegree);
            }}
          >
            <ChooseDegree>
              {selectedDegree ? selectedDegree : "აირჩიეთ ხარისხი"}
            </ChooseDegree>
            <Button>
              <DownArrow src={arrowdown} alt="" />
            </Button>
            {selectedDegreeError && <ErrorImage src={error} />}
          </DegreeOptionsContainer>
          {showDegree && (
            <DegreeOptions>
              <List>
                {degree &&
                  degree.map((degrees) => (
                    <ListItem
                      key={degrees.id}
                      onClick={() => {
                        setselectedDegree(degrees.title);
                        setShowDegree(!showDegree);
                        let result = degrees.id;
                        setDegreeIndex(result);
                        setselectedDegreeError(false);
                      }}
                    >
                      {degrees.title}
                    </ListItem>
                  ))}
              </List>
            </DegreeOptions>
          )}
        </DegreeDiv>
        <NamesInput
          main={"დამთავრების რიცხვი"}
          type={"date"}
          onChange={(e: any) => {
            setUniversityEndDate(e.target.value);
            setUniversityEndDateError(false);
          }}
          value={universityEndDate}
          invalid={universityEndDateError}
        />
      </EducationContainer>
      <InputTextArea
        main={"აღწერა"}
        placeholder={"განათლების აღწერა"}
        onChange={(e: any) => {
          setUniversityDescription(e.target.value);
          setUniversityDescriptionError(false);
        }}
        textAreaRequired={unviersityDescriptionError}
        textAreaValue={universityDescription}
      />
      {/* აქ მთავრდება ედუქეიშენ კომპონენტი  */}
      <HorisontalLine></HorisontalLine>
      {addMoreEducation ? (
        ""
      ) : (
        <AddMoreExperiencebutton
          onClick={() => {
            setAddMoreEducation(true);
          }}
        >
          სხვა სასწავლებლის დამატება
        </AddMoreExperiencebutton>
      )}

      {addMoreEducation && (
        <InputInfo>
          <NamesInput
            main={"სასწავლებელი"}
            placeholder={"სასწავლებელი"}
            hint={"მინიმუმ 2 სიმბოლო"}
            type={"text"}
            value={universityName2}
            onChange={(e: any) => {
              setUniversityName2(e.target.value);
            }}
            invalid={universityNameError2}
          />

          {/* აქ იწყება ედუქეიშენ კომპონენტი!  */}
          <EducationContainer>
            <DegreeDiv>
              <DegreeName>ხარისხი</DegreeName>
              <DegreeOptionsContainer
                onClick={() => {
                  setShowDegree2(!showDegree2);
                }}
              >
                <ChooseDegree>
                  {selectedDegree2 ? selectedDegree2 : "აირჩიეთ ხარისხი"}
                </ChooseDegree>
                <Button>
                  <DownArrow src={arrowdown} alt="" />
                </Button>
                {selectedDegreeError2 && <ErrorImage src={error} />}
              </DegreeOptionsContainer>
              {showDegree2 && (
                <DegreeOptions>
                  <List>
                    {degree2 &&
                      degree2.map((degrees: any) => (
                        <ListItem
                          key={degrees.id}
                          onClick={() => {
                            setselectedDegree2(degrees.title);
                            setShowDegree2(!showDegree2);
                            setselectedDegreeError2(false);
                          }}
                        >
                          {degrees.title}
                        </ListItem>
                      ))}
                  </List>
                </DegreeOptions>
              )}
            </DegreeDiv>
            <NamesInput
              main={"დამთავრების რიცხვი"}
              type={"date"}
              onChange={(e: any) => {
                setUniversityEndDate2(e.target.value);
                setUniversityEndDateError2(false);
              }}
              value={universityEndDate2}
              invalid={universityEndDateError2}
            />
          </EducationContainer>
          <InputTextArea
            main={"აღწერა"}
            placeholder={"განათლების აღწერა"}
            onChange={(e: any) => {
              setUniversityDescription2(e.target.value);
              setUniversityDescriptionError2(false);
            }}
            textAreaRequired={unviersityDescriptionError2}
            textAreaValue={universityDescription2}
          />
          {/* აქ მთავრდება ედუქეიშენ კომპონენტი  */}
        </InputInfo>
      )}

      <BackOrNextContainer>
        <BackButton onClick={goBack2}>ᲣᲙᲐᲜ</BackButton>
        <ForwardButton onClick={sendFinalResult}>ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</ForwardButton>
      </BackOrNextContainer>
    </InputInfo>
  );
}

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

const EducationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
`;

const DegreeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  position: relative;
`;

const DegreeName = styled.h4`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  padding: 0;
  margin: 0px;
`;

const DegreeOptionsContainer = styled.div`
  border: 1px solid #bcbcbc;
  background: #ffffff;
  height: 40px;
  width: 370px;
  border-radius: 4px;
  font-family: "HelveticaNeue";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding: 10px 16px 14px 16px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ChooseDegree = styled.p`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

const Button = styled.button`
  border: none;
  background-color: #ffffff;
`;

const DownArrow = styled.img`
  width: 20px;
`;

const ErrorImage = styled.img`
  position: absolute;
  right: -30px;
`;

const DegreeOptions = styled.div`
  width: 370px;
  background-color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  top: 69px;
  padding: 0px 0px 0px 0px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 0px #e4e4e4;
  background: #ffffff;
  z-index: 2;
`;

const ListItem = styled.li`
  list-style-type: none;
  padding-left: 20px;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const List = styled.ul`
  padding: 0px;
  width: 100%;
`;

const HorisontalLine = styled.div`
  border-bottom: 1px solid #c1c1c1;
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

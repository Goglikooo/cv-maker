import { useState } from "react";
import styled from "styled-components";
import arrowdown from "../images/down-arrow.png";
import NamesInput from "./NamesInput";

export default function EducationDegree() {
  const [showDegree, setShowDegree] = useState(false);

  return (
    <EducationContainer>
      <DegreeDiv>
        <DegreeName>ხარისხი</DegreeName>
        <DegreeOptionsContainer
          onClick={() => {
            setShowDegree(!showDegree);
          }}
        >
          <ChooseDegree>აირჩიეთ ხარისხი</ChooseDegree>
          <Button>
            <DownArrow src={arrowdown} alt="" />
          </Button>
        </DegreeOptionsContainer>
        {showDegree ? (
          <DegreeOptions>
            <ol>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ol>
          </DegreeOptions>
        ) : (
          ""
        )}
      </DegreeDiv>
      <NamesInput main={"დამთავრების რიცხვი"} type={"date"} />
    </EducationContainer>
  );
}

const DownArrow = styled.img`
  width: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: #ffffff;
`;

const DegreeOptions = styled.div`
  width: 370px;
  background-color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  top: 69px;
  padding: 10px 16px 14px 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 0px #e4e4e4;
  background: #ffffff;
`;

const ChooseDegree = styled.p`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
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

import { useEffect, useState } from "react";
import styled from "styled-components";
import arrowdown from "../images/down-arrow.png";
import NamesInput from "./NamesInput";
import axios from "axios";
import error from "../images/error.png";

interface Degrees {
  id: number;
  title: string;
}

export default function EducationDegree() {
  const [showDegree, setShowDegree] = useState(false);
  const [degree, setdegree] = useState<Degrees[] | null>(null);
  const [selectedDegree, setselectedDegree] = useState("");
  const [degreeIndex, setDegreeIndex] = useState(null);

  useEffect(() => {
    const requestDegree = async () => {
      const response = await axios.get(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = response.data;
      setdegree(data);
    };
    requestDegree();
  }, []);

  return (
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
          <ErrorImage src={error} />
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
                      console.log(degree);
                      setShowDegree(!showDegree);
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
        onChange={() => {}}
        value={"r"}
      />
    </EducationContainer>
  );
}

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
  padding: 0px 0px 0px 0px;
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
  position: relative;
`;

const EducationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
  position: relative;
`;

const DegreeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  position: relative;
  z-index: 200000;
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

const ErrorImage = styled.img`
  position: absolute;
  /* right: -30px;
  top: 40px; */
`;

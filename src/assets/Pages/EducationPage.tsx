import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import EducationDegree from "../components/EducationDegree";
import InputHeader from "../components/InputHeader";
import InputTextArea from "../components/InputTextArea";
import NamesInput from "../components/NamesInput";

export default function Education() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PersonalEducationContainer>
      <MainInput>
        <GoBack to="/">&#60;</GoBack>
        <InputInfo>
          <InputHeader header="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" pageNumber="3/3" />

          <NamesInput
            main={"სასწავლებელი"}
            placeholder={"სასწავლებელი"}
            hint={"მინიმუმ 2 სიმბოლო"}
            type={"text"}
          />
          <EducationDegree />
          <InputTextArea main={"აღწერა"} placeholder={"განათლების აღწერა"} />
          <HorisontalLine></HorisontalLine>
          <AddMoreExperiencebutton>
            სხვა სასწავლებლის დამატება
          </AddMoreExperiencebutton>
          <BackOrNextContainer>
            <BackButton onClick={goBack}>ᲣᲙᲐᲜ</BackButton>
            <ForwardButton>ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</ForwardButton>
          </BackOrNextContainer>
        </InputInfo>
      </MainInput>
    </PersonalEducationContainer>
  );
}

const PersonalEducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainInput = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 90px 30px 0px;
  height: 100vh;
  width: 100vw;
`;

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

const InputInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 45px;
`;

const HorisontalLine = styled.div`
  border-bottom: 1px solid #c1c1c1;
`;

const AddMoreExperiencebutton = styled.div`
  height: 48px;
  width: 289px;
  border-radius: 4px;
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

const MainOutput = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
`;

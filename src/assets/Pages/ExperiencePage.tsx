import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputHeader from "../components/InputHeader";
import InputTextArea from "../components/InputTextArea";
import NamesInput from "../components/NamesInput";
import ExperienceComponent from "../components/ExperienceComponent";
import PageHeader from "../components/PageHeader";
import { useState } from "react";

export default function ExperiencePage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(1);
  };

  const [experienceList, setExperienceList] = useState([{ experience: "" }]);

  const handleAddExperience = () => {
    setExperienceList([...experienceList, { experience: "" }]);
  };

  const handleRemoveExperience = (index: number) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setExperienceList(list);
  };

  return (
    <PersonalContainer>
      <MainInput>
        <PageHeader header="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" pageNumber="2/3" link={"/"} />
        <InputInfo>
          {/* შეამოწმოს ერეის სიგრძე და ამის მიხედვით დააბრუნოს გამოცდილების კომპონენტი */}
          {experienceList.map((singleExperience, index) => (
            <ExperienceContainer key={index}>
              {/* თუ ერეის სიგრძე არის 1 ზე მეტი, გაჩნდეს წაშლის ღილაკი კომპონენტზე */}
              {experienceList.length > 1 && (
                <DeleteButton
                  onClick={() => {
                    handleRemoveExperience(index);
                  }}
                >
                  გაუქმება
                </DeleteButton>
              )}
              <ExperienceComponent />
              {/* თუ ერეის სიგრძე არ აღემატება სამს(რენდომად), გაქრეს ახალი გამოცდილების დამატების ღილაკი/ფუქცია */}
              {experienceList.length - 1 === index &&
                experienceList.length < 3 && (
                  <AddMoreExperiencebutton onClick={handleAddExperience}>
                    მეტი გამოცდილების დამატება
                  </AddMoreExperiencebutton>
                )}
            </ExperienceContainer>
          ))}
        </InputInfo>
        <BackOrNextContainer>
          <BackButton onClick={goBack}>ᲣᲙᲐᲜ</BackButton>
          <ForwardButton to={"education"}>ᲨᲔᲛᲓᲔᲒᲘ</ForwardButton>
        </BackOrNextContainer>
      </MainInput>
      <MainOutput></MainOutput>
    </PersonalContainer>
  );
}

const ExperienceContainer = styled.div`
  position: relative;
`;

const DeleteButton = styled.button`
  height: 25px;
  width: 100px;
  align-self: flex-end;
  margin: 0;
  position: absolute;
  right: 0;
  border: none;
  border-radius: 4px;
  background-color: #d0351d;
  color: white;
  font-family: "HelveticaNeue";
  font-size: 14px;
  &:hover {
    background-color: #ff3010;
    cursor: pointer;
  }
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

const ForwardButton = styled(Link)`
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

const BackOrNextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
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

const PersonalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainInput = styled.div`
  background-color: #f9f9f9;
  display: block;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 30px 90px 30px 90px;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const MainOutput = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
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
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 45px;
  margin-bottom: 80px;
`;

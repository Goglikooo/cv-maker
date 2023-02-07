import styled from "styled-components";
import BackgroundImage from "../images/background-image.jfif";
import RedberryLogo from "../images/Redberrylogo.png";
import WaterMark from "../images/watermark.png";
import { Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";

export default function FirstPage() {
  return (
    <Container>
      <Heading>
        <MainLogo src={RedberryLogo} />
      </Heading>
      <StartContainer>
        <AddResumeButton to="PersonalInfo">ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</AddResumeButton>
        <WaterMarkImage src={WaterMark} />
      </StartContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0px 70px;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  &:before {
    content: "";
    background-image: url(${BackgroundImage});
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.35;
  }
`;

const Heading = styled.div`
  border-bottom: 1.4px solid #1a1a1a;
  position: relative;
`;

const MainLogo = styled.img`
  height: auto;
  width: 236px;
  border-radius: 0px;
  padding: 20px 0;
`;

const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
`;

const AddResumeButton = styled(Link)`
  height: 60px;
  width: 464px;
  border-radius: 8px;
  padding: 18px 60px 18px 60px;
  margin: 0 auto;
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: "HelveticaNeue";
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  text-decoration: none;
  z-index: 2;

  &:hover {
    background-color: #202020;
    cursor: pointer;
  }
`;

const WaterMarkImage = styled.img`
  opacity: 0.1;
  max-width: 300px;
  max-height: 300px;
  position: absolute;
  right: 28%;
  top: 45%;
  z-index: 1;
`;

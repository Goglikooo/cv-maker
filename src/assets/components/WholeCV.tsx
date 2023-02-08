import React from "react";
import styled from "styled-components";
import atSymbol from "../images/at-Symbol.png";
import phoneIcon from "../images/phone-icon.png";
import CVImage from "../images/cv-image.jpg";

export default function WholeCV() {
  return (
    <MainContentContainer>
      <CvFirstPart className="firstpart">
        <MainWithImg className="contant-info">
          <FullName className="fullname">
            <h1>ანზორ</h1>
            <h1>მუმლაძე</h1>
          </FullName>
          <div className="contacts">
            <ContactData className="email">
              <img src={atSymbol} alt="" />
              <InputOutput>Anzormumladze@redberrt.ge</InputOutput>
            </ContactData>
            <ContactData className="phone">
              <img src={phoneIcon} alt="" />
              <InputOutput>+995597634516</InputOutput>
            </ContactData>
          </div>
          <AboutMe>
            <AboutMeHeader>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeHeader>
            <AboutMeParagraph>
              ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
              გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.{" "}
            </AboutMeParagraph>
          </AboutMe>
        </MainWithImg>
        <CvImage src={CVImage} alt="" />
      </CvFirstPart>
      <CvSecondPart>
        <h1>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h1>
        <div>
          <p>React Native Developer, </p>
          <p>Microsoft</p>
        </div>
        <div className="startEnd">
          <p>2020-09-23</p>
          <p>2020-09-23</p>
        </div>
        <p>
          Experienced Javascript Native Developer with 5 years in the industry.
          proficient withreact. Used problem-solving aptitude to encahge
          application performance by 14%.created data visualisation tools and
          integrated designs.
        </p>
      </CvSecondPart>
    </MainContentContainer>
  );
}

const CvSecondPart = styled.div`
  display: flex;
  padding-right: 20px;
  flex-direction: column;
`;

const MainWithImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

const CvImage = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 50%;
`;

const AboutMeParagraph = styled.p`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: #000000;
`;

const AboutMeHeader = styled.h2`
  font-family: "HelveticaNeue";
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  color: #f93b1d;
`;

const AboutMe = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`;

const InputOutput = styled.p`
  font-family: "HelveticaNeue";
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;

const ContactData = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

const FullName = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  color: #f93b1d;
  font-family: "HelveticaNeue";
  font-size: 22px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
`;

const CvFirstPart = styled.div`
  display: flex;
  padding-right: 20px;
`;

const MainContentContainer = styled.div`
  width: 100%;
  padding: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 60px;
`;

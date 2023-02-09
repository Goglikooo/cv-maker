import React from "react";
import styled from "styled-components";
import atSymbol from "../images/at-Symbol.png";
import phoneIcon from "../images/phone-icon.png";
import CVImage from "../images/cv-image.jpg";
import NamesInput from "./NamesInput";

interface Props {
  name?: string;
  lastname?: string;
}

export default function WholeCV(props: Props) {
  const { name, lastname } = props;
  return (
    <MainContentContainer>
      <CvFirstPart>
        <MainWithImg>
          <FullName>
            <h1>{name}</h1>
            <h1>{lastname}</h1>
          </FullName>
          <ContactDataContainer>
            <ContactData>
              <img src={atSymbol} alt="" />
              <InputOutput>Anzormumladze@redberry.ge</InputOutput>
            </ContactData>
            <ContactData className="phone">
              <img src={phoneIcon} alt="" />
              <InputOutput>+995597634516</InputOutput>
            </ContactData>
          </ContactDataContainer>
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
        <ExperienceHeader>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</ExperienceHeader>
        <JobCompanyDatesContainer>
          <JobTitleAndCompanyName>
            <JobTitleOrCompanyName>
              React Native Developer,
            </JobTitleOrCompanyName>
            <JobTitleOrCompanyName>Microsoft</JobTitleOrCompanyName>
          </JobTitleAndCompanyName>
          <StartEndDate>
            <p>2020-09-23</p>
            <span> - </span>
            <p>2020-09-23</p>
          </StartEndDate>
        </JobCompanyDatesContainer>
        <AboutExperience>
          Experienced Javascript Native Developer with 5 years in the industry.
          proficient withreact. Used problem-solving aptitude to encahge
          application performance by 14%.created data visualisation tools and
          integrated designs.
        </AboutExperience>
      </CvSecondPart>
      <CvThirdPart>
        <EducationHeader>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</EducationHeader>
        <EducationDegreeDate>
          <JobTitleAndCompanyName>
            <JobTitleOrCompanyName>
              წმ. ანდრიას საპატრიარქოს სასწავლებელი,
            </JobTitleOrCompanyName>
            <JobTitleOrCompanyName>სტუდენტი</JobTitleOrCompanyName>
          </JobTitleAndCompanyName>
          <StartEndDate>
            <p>2020-09-23</p>
          </StartEndDate>
        </EducationDegreeDate>
        <AboutExperience>
          ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
          კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
          მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
          ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
        </AboutExperience>
      </CvThirdPart>
    </MainContentContainer>
  );
}

const EducationDegreeDate = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2px;
`;

const EducationHeader = styled.p`
  font-family: "HelveticaNeue";
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  color: #f93b1d;
`;

const CvThirdPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const ContactDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const AboutExperience = styled.p`
  font-family: "HelveticaNeue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #000000;
`;

const StartEndDate = styled.div`
  display: flex;
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #999797;

  gap: 5px;
`;

const JobTitleAndCompanyName = styled.div`
  display: flex;
  gap: 10px;
`;

const JobCompanyDatesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2px;
`;

const JobTitleOrCompanyName = styled.p`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`;

const ExperienceHeader = styled.p`
  font-family: "HelveticaNeue";
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  color: #f93b1d;
`;

const CvSecondPart = styled.div`
  display: flex;
  padding-right: 20px;
  flex-direction: column;
  gap: 12px;
`;

const MainWithImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 35px;
`;

const CvImage = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 50%;
`;

const AboutMeParagraph = styled.p`
  font-family: "HelveticaNeue";
  font-size: 18px;
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
  padding: 80px 150px 80px 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 60px;
`;

import styled from "styled-components";
import InputHeader from "../components/InputHeader";
import { Link } from "react-router-dom";
import NamesInput from "../components/NamesInput";
import InputTextArea from "../components/InputTextArea";
import MainoutputCv from "../components/WholeCV";
import { useEffect, useState, useRef } from "react";
import atSymbol from "../images/at-Symbol.png";
import phoneIcon from "../images/phone-icon.png";
import CVImage from "../images/cv-image.jpg";
import React from "react";
import ok from "../images/ok.png";
import error from "../images/error.png";

export default function PersonalInfo() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [photoImage, setPhotoImage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [firsNameOk, setFirsNameOk] = useState(false);
  const [lastNameOk, setLastNameOk] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const hiddenFileInput = React.useRef<any>(null);

  useEffect(() => {
    if (nameValidator(name)) {
      setFirsNameOk(true);
      setFirstNameError(false);
    }

    if (lastNameValidator(lastName)) {
      setLastNameOk(true);
      setLastNameError(false);
    }
  }, [name, setName, lastName, email, phone, aboutMe, photoImage]);

  const nameValidator = (name: string) => {
    const regEx = new RegExp(/^[ა-ჰ]{2,}$/g);
    const result = regEx.test(name);
    if (result) {
      setFirstNameError(false);
      setFirsNameOk(true);

      return true;
    } else if (name == "") {
      setFirstNameError(false);
      setFirsNameOk(false);
    } else {
      setFirstNameError(true);
      setFirsNameOk(false);

      return false;
    }
  };

  const lastNameValidator = (name: string) => {
    const regEx = new RegExp(/^[ა-ჰ]{2,}$/g);
    const result = regEx.test(name);
    if (result) {
      setLastNameError(false);
      setLastNameOk(true);

      return true;
    } else if (name == "") {
      setLastNameError(false);
      setLastNameOk(false);
    } else {
      setLastNameError(true);
      setLastNameOk(false);

      return false;
    }
  };

  const regExEmail = () => {
    const regExEmailValidator = new RegExp("/^[a-zA-Z](@redberry/.ge)$/");
  };

  const phoneNumberValidator = () => {
    const phoneNumberValidation = new RegExp(
      "/((+)?d{3,})?([ -])?(d{2,})([ -])?(d{2,})?/"
    );
  };

  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };

  const handleImgSave = (event: any) => {
    setPhotoImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <PersonalContainer>
      <MainInput>
        <GoBack to="/">&#60;</GoBack>
        <InputInfo>
          <InputHeader header={"ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"} pageNumber={"1/3"} />
          <PersonNamesContainer>
            <PersonInputContainer>
              <InputName>სახელი</InputName>
              <NamesInputContainer>
                <NameInputField
                  type="text"
                  placeholder="ანზორ"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {firsNameOk && <OkImage src={ok} />}
                {firstNameError ? <ErrorImage src={error} /> : ""}
              </NamesInputContainer>

              <NamesHint>"მინიმუმ 2 ასო, ქართული ასოები"</NamesHint>
            </PersonInputContainer>
            <PersonInputContainer>
              <InputName>გვარი</InputName>
              <NamesInputContainer>
                <NameInputField
                  type="text"
                  placeholder="მუმლაძე"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {lastNameOk && <OkImage src={ok} />}
                {lastNameError ? <ErrorImage src={error} /> : ""}
              </NamesInputContainer>
              <NamesHint>"მინიმუმ 2 ასო, ქართული ასოები"</NamesHint>
            </PersonInputContainer>
          </PersonNamesContainer>
          <PictureFieldContainer>
            <InputName>პირადი ფოტოს ატვირთვა</InputName>
            <SelectPhotoInput
              type="file"
              ref={hiddenFileInput}
              onChange={handleImgSave}
            />
            <SelectPhoto onClick={handleClick}>ატვირთვა</SelectPhoto>
          </PictureFieldContainer>
          <PersonInputContainer>
            <InputName>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</InputName>
            <AboutInput
              placeholder="ზოგადი ინფო შენ შესახებ"
              onChange={(e) => {
                setAboutMe(e.target.value);
              }}
            />
          </PersonInputContainer>
          <PersonInputContainer>
            <InputName>ელ.ფოსტა</InputName>
            <NamesInputContainer>
              <ContactInput
                type="email"
                placeholder="anzorr666@redberry.ge"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <OkImage src={ok} />
              <ErrorImage src={error} />
            </NamesInputContainer>
            <NamesHint>უნდა მთავრდებოდეს @redberry.ge-ით</NamesHint>
          </PersonInputContainer>
          <PersonInputContainer>
            <InputName>მობილურის ნომერი</InputName>
            <NamesInputContainer>
              <ContactInput
                type="text"
                placeholder="+995 551 12 34 56"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <OkImage src={ok} />
              <ErrorImage src={error} />
            </NamesInputContainer>
            <NamesHint>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </NamesHint>
          </PersonInputContainer>
          <NextPageButton to="experience">ᲨᲔᲛᲓᲔᲒᲘ</NextPageButton>
        </InputInfo>
      </MainInput>
      <MainOutput>
        <MainContentContainer>
          <CvFirstPart>
            <MainWithImg>
              <FullName>
                {name ? (
                  <PersonFirsName>{name}</PersonFirsName>
                ) : (
                  <PersonFirsName />
                )}
                {lastName ? (
                  <PersonLastName>{lastName}</PersonLastName>
                ) : (
                  <PersonLastName />
                )}
              </FullName>
              <ContactDataContainer>
                {email ? (
                  <ContactData>
                    <img src={atSymbol} alt="" />
                    <InputOutput>{email}</InputOutput>
                  </ContactData>
                ) : (
                  <ContactData />
                )}
                {phone ? (
                  <ContactData className="phone">
                    <img src={phoneIcon} alt="" />
                    <InputOutput>{phone}</InputOutput>
                  </ContactData>
                ) : (
                  <ContactData />
                )}
              </ContactDataContainer>
              {aboutMe ? (
                <AboutMe>
                  <AboutMeHeader>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeHeader>
                  <AboutMeParagraph>{aboutMe}</AboutMeParagraph>
                </AboutMe>
              ) : (
                <AboutMe />
              )}
            </MainWithImg>
            {photoImage && <CvImage src={photoImage} alt="" />}
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
              Experienced Javascript Native Developer with 5 years in the
              industry. proficient withreact. Used problem-solving aptitude to
              encahge application performance by 14%.created data visualisation
              tools and integrated designs.
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
      </MainOutput>
    </PersonalContainer>
  );
}

//names imput container

const NamesInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  font-family: "HelveticaNeue";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  /* padding: 13px 16px 14px 16px; */
  background-color: #ffffff;
  position: relative;
`;

const OkImage = styled.img`
  position: absolute;
  right: 10px;
`;

const ErrorImage = styled.img`
  position: absolute;
  right: -30px;
`;

//personFullname

const PersonFirsName = styled.h1`
  min-width: 130px;
  min-height: 45px;
`;
const PersonLastName = styled.h1`
  min-width: 170px;
  min-height: 45px;
`;

//about me-ს გრაფა დასაწყისი
const AboutInput = styled.textarea`
  height: 100px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding: 13px 16px;
  resize: none;
`;
//about me-ს გრაფა დასასრული

//პირადი ინფორმაციის ინფუთების კომპონენტის დასაწყისი

const PersonInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const InputName = styled.h4`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  position: relative;
`;

const NameInputField = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: none;
  font-family: "HelveticaNeue";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding: 13px 16px 14px 16px;
`;

const NamesHint = styled.span`
  font-family: "HelveticaNeue";
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;

//პირადი ინფორმაციის ინფუთების კომპონენტის დასასრული

//პირადი ინფორმაციის ფეიჯი კომპონენტებით

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

const PersonalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const MainInput = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 90px 30px 0px;
  height: 100vh;
  width: 100vw;
`;

const InputInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 45px;
`;

const MainOutput = styled.div`
  height: 100%;
  width: 100%;
`;

const PersonNamesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
  box-sizing: border-box;
`;

const PictureFieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SelectPhotoInput = styled.input`
  display: none;
`;

const SelectPhoto = styled.button`
  height: 30px;
  width: 160px;
  border-radius: 4px;
  background-color: #0e80bf;
  color: #ffffff;
  text-align: center;
  border: none;

  &:hover {
    background-color: #02527d;
    cursor: pointer;
  }
`;

const ContactInput = styled.input`
  height: 40px;
  width: 100%;
  left: 24px;
  top: 37px;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  padding: 13px 16px;
`;

const NextPageButton = styled(Link)`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 48px;
  width: 150px;
  border-radius: 4px;
  border: none;
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  background: #6b40e3;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;

  &:hover {
    background: #7949ff;
    cursor: pointer;
  }
`;

//პირადი ინფორმაციის ფეიჯი კომპონენტებით

// მთლიანი სივის დასაწყისი

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
  border: none;
  background-color: white;
`;

const AboutMeParagraph = styled.p`
  font-family: "HelveticaNeue";
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  word-wrap: break-word;
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
  display: inline-block;
  flex-direction: column;
  width: 500px;
  word-wrap: break-word;
  gap: 15px;

  min-height: 120px;
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
  height: 22px;
  gap: 10px;
`;

const FullName = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  padding: 80px 100px 80px 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 60px;
`;

// მთლიანი სივის დასასრული

import styled from "styled-components";
import InputHeader from "../components/InputHeader";
import { Link, useNavigate } from "react-router-dom";
import NamesInput from "../components/NamesInput";
import InputTextArea from "../components/InputTextArea";
import MainoutputCv from "../components/WholeCV";
import { useEffect, useState, useRef } from "react";
import atSymbol from "../images/at-Symbol.png";
import phoneIcon from "../images/phone-icon.png";
import React from "react";
import ok from "../images/ok.png";
import error from "../images/error.png";
import ExperienceComponent from "../components/ExperienceComponent";
import PageHeader from "../components/PageHeader";
import EducationDegree from "../components/EducationDegree";
import axios from "axios";
import arrowdown from "../images/down-arrow.png";

export default function PersonalInfo() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const [photoImage, setPhotoImage] = useState("");
  const [photoImageError, setPhotoImageError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [firsNameOk, setFirsNameOk] = useState(false);
  const [lastNameOk, setLastNameOk] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneOk, setPhoneOk] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [goToPersonalPage, setGoToPersonalPage] = useState(false);
  const [goToExperiencePage, setGoToExperiencePage] = useState(false);
  const [goToEducationPage, setGoToEducationPage] = useState(true);

  const [position, setPosition] = useState("");
  const [invalidPosition, setIvalidPosition] = useState(false);
  const [invalidEmployer, setInvalidEmployer] = useState(false);

  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [experienceStartdate, setExperienceStartdate] = useState(false);
  const [experienceEnddate, setExperienceEnddate] = useState(false);
  const [textAreaRequired, setTextAreaRequired] = useState(false);

  const [showDegree, setShowDegree] = useState(false);
  const [degree, setdegree] = useState<Degrees[] | null>(null);
  const [selectedDegree, setselectedDegree] = useState("");
  const [selectedDegreeError, setselectedDegreeError] = useState(false);
  const [universityName, setUniversityName] = useState("");
  const [universityNameError, setUniversityNameError] = useState(false);
  const [universityEndDate, setUniversityEndDate] = useState("");
  const [universityDescription, setUniversityDescription] = useState("");

  interface Degrees {
    id: number;
    title: string;
  }

  const hiddenFileInput = React.useRef<any>(null);

  const sendFinalResult = () => {
    if (universityName == "") {
      setUniversityNameError(true);
    }
    if (selectedDegree == "") {
      setselectedDegreeError(true);
    }
  };

  function handleNextPageExperience() {
    if (firsNameOk && lastNameOk && emailOk && phoneOk && photoImage) {
      setGoToExperiencePage(true);
      setGoToPersonalPage(false);
    }
    if (nameValidator(name) === false) {
      setFirstNameError(true);
    }
    if (lastNameValidator(lastName) === false) {
      setLastNameError(true);
    }
    if (emailValidator(email) === false) {
      setEmailError(true);
    }
    if (phoneNumberValidator(phone) === false) {
      setPhoneError(true);
    }
    if (photoImage == "") {
      setPhotoImageError(true);
    }
  }

  function handleNextPageEducation() {
    if (position && employer && startDate && endDate && aboutJob) {
      setGoToEducationPage(true);
      setGoToExperiencePage(false);
    }
    if (position.length < 2 || position == "") {
      setIvalidPosition(true);
    }

    if (employer.length < 2 || employer == "") {
      setInvalidEmployer(true);
    }
    if (startDate == "") {
      setExperienceStartdate(true);
    }
    if (endDate == "") {
      setExperienceEnddate(true);
    }
    if (aboutJob == "") {
      setTextAreaRequired(true);
    }
  }

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

  useEffect(() => {
    if (nameValidator(name)) {
      setFirsNameOk(true);
      setFirstNameError(false);
    }

    if (lastNameValidator(lastName)) {
      setLastNameOk(true);
      setLastNameError(false);
    }

    if (emailValidator(email)) {
      setEmailOk(true);
      setEmailError(false);
    }

    if (phoneNumberValidator(phone)) {
      setPhoneOk(true);
      setPhoneError(false);
    }
    if (position.length > 2) {
      setIvalidPosition(false);
    }
    if (employer.length > 2) {
      setInvalidEmployer(false);
    }
    if (universityName.length > 2) {
      setUniversityNameError(false);
    }
  }, [
    name,
    lastName,
    email,
    phone,
    aboutMe,
    photoImage,
    position,
    employer,
    startDate,
    endDate,
    universityName,
    invalidPosition,
    invalidEmployer,
  ]);

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
      return false;
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
      return false;
    } else {
      setLastNameError(true);
      setLastNameOk(false);
      return false;
    }
  };

  const emailValidator = (email: string) => {
    const regExEmailValidator = new RegExp(
      /((^[a-zA-Z0-9]{1,})?(\.|\_|\-|\+)?([a-zA-Z0-9]){1,}?(\.|\_|\-|\+)?([a-zA-Z0-9]){1,}(\@redberry.ge))/
    );
    const emailResult = regExEmailValidator.test(email);
    if (emailResult) {
      setEmailError(false);
      setEmailOk(true);
      return true;
    } else if (email == "") {
      setEmailError(false);
      setEmailOk(false);
      return false;
    } else {
      setEmailError(true);
      setEmailOk(false);
      return false;
    }
  };

  const phoneNumberValidator = (phone: string) => {
    const phoneNumberValidation = new RegExp(
      /(?:(\+995)[ -]?)(?:([0-9]{3})[ -]?)(?:([0-9]{1,})[- ]?)(?:([0-9]{2,})[ -]?)([0-9]{2,})/
    );

    const phoneResult = phoneNumberValidation.test(phone);

    if (phoneResult) {
      setPhoneError(false);
      setPhoneOk(true);
      return true;
    } else if (phone == "") {
      setPhoneError(false);
      setPhoneOk(false);
      return false;
    } else {
      setPhoneError(true);
      setPhoneOk(false);
      return false;
    }
  };

  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };

  const handleImgSave = (event: any) => {
    setPhotoImage(URL.createObjectURL(event.target.files[0]));
    setPhotoImageError(false);
    return true;
  };

  //experience Page setup start

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

  //experience Page setup end

  return (
    <PersonalContainer>
      <MainInput>
        {/* ეს არის პირველი ფეიჯის დასაწყისი */}

        {goToPersonalPage && (
          <InputInfo>
            <PageHeader header="პირადი ინფო" pageNumber="1/3" link={"/"} />
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
                  {firstNameError && <ErrorImage src={error} />}
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
                  {lastNameError && <ErrorImage src={error} />}
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
              {photoImageError && <ErrorImage src={error} />}
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
                {emailOk && <OkImage src={ok} />}
                {emailError && <ErrorImage src={error} />}
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
                {phoneOk && <OkImage src={ok} />}
                {phoneError && <ErrorImage src={error} />}
              </NamesInputContainer>
              <NamesHint>
                უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
              </NamesHint>
            </PersonInputContainer>
            {/* აქედან სხვა გვერდძე არ გადავა უბრალოდ სხვა რამეს გამოაჩენს */}

            <NextPageButton onClick={handleNextPageExperience}>
              ᲨᲔᲛᲓᲔᲒᲘ
            </NextPageButton>
          </InputInfo>
        )}

        {/* ეს არის პირველი ფეიჯის დასასრული */}
        {/* აქ იწყება გამოცდილების ფეიჯი */}
        {goToExperiencePage && (
          <PersonalContainerExperience>
            <InputInfo>
              <PageHeader header="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" pageNumber="2/3" link={"/"} />
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
                  />
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
              <ForwardButton onClick={handleNextPageEducation}>
                ᲨᲔᲛᲓᲔᲒᲘ
              </ForwardButton>
            </BackOrNextContainer>
          </PersonalContainerExperience>
        )}
        {/* აქ მთავრდება გამოცდილების ფეიჯი */}

        {/* აქ იწყება განათლების ფეიჯი */}

        {goToEducationPage && (
          <InputInfo>
            <InputHeader header="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" pageNumber="3/3" />

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

            {/* აქ იწყება ედუქეიშენ კომპონენტი  */}
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
                }}
                value={universityEndDate}
              />
            </EducationContainer>

            {/* აქ მთავრდება ედუქეიშენ კომპონენტი  */}
            <InputTextArea
              main={"აღწერა"}
              placeholder={"განათლების აღწერა"}
              onChange={(e: any) => {
                setUniversityDescription(e.target.value);
              }}
              textAreaValue={universityDescription}
            />
            <HorisontalLine></HorisontalLine>
            <AddMoreExperiencebutton>
              სხვა სასწავლებლის დამატება
            </AddMoreExperiencebutton>
            <BackOrNextContainer>
              <BackButton onClick={goBack}>ᲣᲙᲐᲜ</BackButton>
              <ForwardButton onClick={sendFinalResult}>ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</ForwardButton>
            </BackOrNextContainer>
          </InputInfo>
        )}
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
            {photoImage ? <CvImage src={photoImage} alt="" /> : <HiddenImg />}
          </CvFirstPart>
          {(position || employer || startDate || endDate || aboutJob) && (
            <CvSecondPart>
              <ExperienceHeader>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</ExperienceHeader>
              <JobCompanyDatesContainer>
                <JobTitleAndCompanyName>
                  <JobTitleOrCompanyName>{position},</JobTitleOrCompanyName>
                  <JobTitleOrCompanyName>{employer}</JobTitleOrCompanyName>
                </JobTitleAndCompanyName>
                <StartEndDate>
                  <p>{startDate}</p>
                  <span> - </span>
                  <p>{endDate}</p>
                </StartEndDate>
              </JobCompanyDatesContainer>
              <AboutExperience>{aboutJob}</AboutExperience>
            </CvSecondPart>
          )}
          {(universityName ||
            selectedDegree ||
            universityEndDate ||
            universityDescription) && (
            <CvThirdPart>
              <EducationHeader>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</EducationHeader>
              <EducationDegreeDate>
                <JobTitleAndCompanyName>
                  <JobTitleOrCompanyName>
                    {universityName},
                  </JobTitleOrCompanyName>
                  <JobTitleOrCompanyName>
                    {selectedDegree}
                  </JobTitleOrCompanyName>
                </JobTitleAndCompanyName>
                <StartEndDate>
                  <p>{universityEndDate}</p>
                </StartEndDate>
              </EducationDegreeDate>
              <AboutExperience>{universityDescription}</AboutExperience>
            </CvThirdPart>
          )}
        </MainContentContainer>
      </MainOutput>
    </PersonalContainer>
  );
}

//education degree container dasawyisi

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
  z-index: 2;
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

//education degree coontainer dasasruli

//education Page start

const PersonalEducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HorisontalLine = styled.div`
  border-bottom: 1px solid #c1c1c1;
`;
//education page end

// experiencepage styles start

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

const PersonalContainerExperience = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

// const InputInfo = styled.div`
//   width: 100%;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   gap: 45px;
//   margin-bottom: 80px;
// `;

// esperiencepahe styles end

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

const ErrorIconForImg = styled.img`
  position: absolute;
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
  padding: 30px 90px 30px 90px;
  height: 100%;
  width: 100%;
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
  position: relative;
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

const NextPageButton = styled.button`
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
  text-transform: none;
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
`;

const HiddenImg = styled.div`
  height: 240px;
  width: 240px;
  border-radius: 50%;
  border: none;
  visibility: hidden;
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
  width: 500px;
  word-wrap: break-word;
`;

const CvFirstPart = styled.div`
  display: flex;
  /* padding-right: 0px; */
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

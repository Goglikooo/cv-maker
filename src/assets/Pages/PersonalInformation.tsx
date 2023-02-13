import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import ok from "../images/ok.png";
import error from "../images/error.png";

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  firsNameOk: boolean;
  firstNameError: boolean;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  lastNameOk: boolean;
  lastNameError: boolean;
  hiddenFileInput: React.MutableRefObject<any>;
  handleImgSave: (event: any) => boolean;
  handleClick: (event: any) => void;
  photoImageError: boolean;
  setAboutMe: React.Dispatch<React.SetStateAction<string>>;
  aboutMe: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  emailOk: boolean;
  emailError: boolean;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  phoneOk: boolean;
  phoneError: boolean;
  handleNextPageExperience: any;
}

export default function PersonalInformation(props: Props) {
  const {
    name,
    setName,
    firsNameOk,
    firstNameError,
    lastName,
    setLastName,
    lastNameOk,
    lastNameError,
    hiddenFileInput,
    handleImgSave,
    handleClick,
    photoImageError,
    setAboutMe,
    aboutMe,
    setEmail,
    email,
    emailOk,
    emailError,
    setPhone,
    phone,
    phoneOk,
    phoneError,
    handleNextPageExperience,
  } = props;
  return (
    <InputInfo>
      <PageHeader header="პირადი ინფო" pageNumber="1/3" link={"/"} />
      <PersonNamesContainer>
        <PersonInputContainer>
          <InputName htmlFor="name">სახელი </InputName>
          <NamesInputContainer>
            <NameInputField
              id="name"
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
          <InputName htmlFor="lastName">გვარი</InputName>
          <NamesInputContainer>
            <NameInputField
              id="lastName"
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
        <InputName htmlFor="photo">პირადი ფოტოს ატვირთვა</InputName>

        <SelectPhotoInput
          id="photo"
          type="file"
          ref={hiddenFileInput}
          onChange={handleImgSave}
        />
        <SelectPhoto onClick={handleClick}>ატვირთვა</SelectPhoto>
        {photoImageError && <ErrorImage src={error} />}
      </PictureFieldContainer>

      <PersonInputContainer>
        <InputName htmlFor="aboutMe">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</InputName>
        <AboutInput
          id="aboutMe"
          placeholder="ზოგადი ინფო შენ შესახებ"
          onChange={(e) => {
            setAboutMe(e.target.value);
          }}
          value={aboutMe}
        />
      </PersonInputContainer>
      <PersonInputContainer>
        <InputName htmlFor="email">ელ.ფოსტა</InputName>
        <NamesInputContainer>
          <ContactInput
            id="email"
            type="email"
            placeholder="anzorr666@redberry.ge"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          {emailOk && <OkImage src={ok} />}
          {emailError && <ErrorImage src={error} />}
        </NamesInputContainer>
        <NamesHint>უნდა მთავრდებოდეს @redberry.ge-ით</NamesHint>
      </PersonInputContainer>
      <PersonInputContainer>
        <InputName htmlFor="number">მობილურის ნომერი</InputName>
        <NamesInputContainer>
          <ContactInput
            id="number"
            type="text"
            placeholder="+995 551 12 34 56"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
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

const PersonNamesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
  box-sizing: border-box;
`;

const PersonInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const InputName = styled.label`
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  position: relative;
`;

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

const OkImage = styled.img`
  position: absolute;
  right: 10px;
`;

const ErrorImage = styled.img`
  position: absolute;
  right: -30px;
`;

const NamesHint = styled.span`
  font-family: "HelveticaNeue";
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
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

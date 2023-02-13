import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import atSymbol from "../images/at-Symbol.png";
import phoneIcon from "../images/phone-icon.png";
import React from "react";
import axios from "axios";
import PersonalInformation from "../Pages/PersonalInformation";
import ExperiencePage from "../Pages/ExperiencePage";
import EducationPage from "../Pages/EducationPage";
//
//
//
//
//

export default function PersonalInfo() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const [photoImage, setPhotoImage] = useState("");
  const [photoImageError, setPhotoImageError] = useState(false);
  const [photoImageForAxios, setPhotoImageForAxios] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [firsNameOk, setFirsNameOk] = useState(false);

  const [lastNameOk, setLastNameOk] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const [emailOk, setEmailOk] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [phoneOk, setPhoneOk] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [goToPersonalPage, setGoToPersonalPage] = useState(true);
  const [goToExperiencePage, setGoToExperiencePage] = useState(false);
  const [goToEducationPage, setGoToEducationPage] = useState(false);

  //pirveli experience
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
  //end of pirveli experience

  const goBack1 = () => {
    setGoToPersonalPage(true);
    setGoToExperiencePage(false);
    console.log("Go back");
  };

  const goBack2 = () => {
    setGoToPersonalPage(false);
    setGoToEducationPage(false);
    setGoToExperiencePage(true);
    console.log("Go back");
  };

  //meore experience start
  const [position2, setPosition2] = useState("");
  const [invalidPosition2, setIvalidPosition2] = useState(false);
  const [invalidEmployer2, setInvalidEmployer2] = useState(false);
  const [employer2, setEmployer2] = useState("");
  const [startDate2, setStartDate2] = useState("");
  const [endDate2, setEndDate2] = useState("");
  const [aboutJob2, setAboutJob2] = useState("");
  const [experienceStartdate2, setExperienceStartdate2] = useState(false);
  const [experienceEnddate2, setExperienceEnddate2] = useState(false);
  const [textAreaRequired2, setTextAreaRequired2] = useState(false);
  //end of meore experience

  const [addMoreExperienceField, setAddMoreExperienceField] = useState(false);

  const addMoreExperienceFunction = () => {
    setAddMoreExperienceField(true);
  };

  // pirveli education start

  const [showDegree, setShowDegree] = useState(false);
  const [degree, setdegree] = useState<Degrees[] | null>(null);
  const [selectedDegree, setselectedDegree] = useState("");
  const [selectedDegreeError, setselectedDegreeError] = useState(false);
  const [universityName, setUniversityName] = useState("");
  const [universityNameError, setUniversityNameError] = useState(false);
  const [universityEndDate, setUniversityEndDate] = useState("");
  const [universityEndDateError, setUniversityEndDateError] = useState(false);
  const [universityDescription, setUniversityDescription] = useState("");
  const [unviersityDescriptionError, setUniversityDescriptionError] =
    useState(false);

  // pirveli education end

  //meore education start

  const [addMoreEducation, setAddMoreEducation] = useState(false);

  const [showDegree2, setShowDegree2] = useState(false);
  const [degree2, setdegree2] = useState<Degrees[] | null>(null);
  const [selectedDegree2, setselectedDegree2] = useState("");
  const [selectedDegreeError2, setselectedDegreeError2] = useState(false);
  const [universityName2, setUniversityName2] = useState("");
  const [universityNameError2, setUniversityNameError2] = useState(false);
  const [universityEndDate2, setUniversityEndDate2] = useState("");
  const [universityEndDateError2, setUniversityEndDateError2] = useState(false);
  const [universityDescription2, setUniversityDescription2] = useState("");
  const [unviersityDescriptionError2, setUniversityDescriptionError2] =
    useState(false);

  const [degreeIndex, setDegreeIndex] = useState(null);
  //meore education end

  const [sentResult, setSentResult] = useState(false);
  const [removeFinalMessage, setRemoveFinalMessage] = useState(true);

  const postRequest = () => {
    const formData = new FormData();
    formData.append("image", photoImage);
    const newImage = URL.revokeObjectURL(photoImage);
    axios
      .post(
        "https://resume.redberryinternship.ge/api/cvs",
        {
          name: name,
          surname: lastName,
          email: email,
          phone_number: phone,
          experiences: [
            {
              position: position,
              employer: employer,
              start_date: startDate,
              due_date: endDate,
              description: aboutJob,
            },
            {
              position: position2,
              employer: employer2,
              start_date: startDate2,
              due_date: endDate2,
              description: aboutJob2,
            },
          ],
          educations: [
            {
              institute: universityName,
              degree_id: 1,
              due_date: universityEndDate,
              description: universityDescription,
            },
            {
              institute: universityName2,
              degree_id: 2,
              due_date: universityEndDate2,
              description: universityDescription2,
            },
          ],
          image: photoImageForAxios,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        // aq unda chavwero boolo cv.
        setGoToEducationPage(false);
        setSentResult(true);
      })
      .catch((err) => console.log(err));
  };

  // save information in sessionStorage Start

  useEffect(() => {
    const savedName = sessionStorage.getItem("SavedName");
    {
      savedName != null && setName(JSON.parse(savedName));
    }
    const savedLastName = sessionStorage.getItem("SavedLastName");
    {
      savedLastName != null && setLastName(JSON.parse(savedLastName));
    }
    const savedEmail = sessionStorage.getItem("SavedEmail");
    {
      savedEmail != null && setEmail(JSON.parse(savedEmail));
    }
    const savedPhone = sessionStorage.getItem("SavedPhone");
    {
      savedPhone != null && setPhone(JSON.parse(savedPhone));
    }
    const savedAboutMe = sessionStorage.getItem("SavedAboutMe");
    {
      savedAboutMe != null && setAboutMe(JSON.parse(savedAboutMe));
    }
    const savedPosition = sessionStorage.getItem("SavedPosition");
    {
      savedPosition != null && setPosition(JSON.parse(savedPosition));
    }
    const savedEmployer = sessionStorage.getItem("SavedEmployer");
    {
      savedEmployer != null && setEmployer(JSON.parse(savedEmployer));
    }
    const savedStartDate = sessionStorage.getItem("SavedStartDate");
    {
      savedStartDate != null && setStartDate(JSON.parse(savedStartDate));
    }
    const savedEndtDate = sessionStorage.getItem("SavedEndDate");
    {
      savedEndtDate != null && setEndDate(JSON.parse(savedEndtDate));
    }
    const savedAboutJob = sessionStorage.getItem("SavedAboutJob");
    {
      savedAboutJob != null && setAboutJob(JSON.parse(savedAboutJob));
    }
    const savedPosition2 = sessionStorage.getItem("SavedPosition2");
    {
      savedPosition2 != null && setPosition2(JSON.parse(savedPosition2));
    }
    const savedEmployer2 = sessionStorage.getItem("SavedEmployer2");
    {
      savedEmployer2 != null && setEmployer2(JSON.parse(savedEmployer2));
    }
    const savedStartDate2 = sessionStorage.getItem("SavedStartDate2");
    {
      savedStartDate2 != null && setStartDate2(JSON.parse(savedStartDate2));
    }
    const savedEndtDate2 = sessionStorage.getItem("SavedEndDate2");
    {
      savedEndtDate2 != null && setEndDate2(JSON.parse(savedEndtDate2));
    }
    const savedAboutJob2 = sessionStorage.getItem("SavedAboutJob2");
    {
      savedAboutJob2 != null && setAboutJob2(JSON.parse(savedAboutJob2));
    }
    const savedAddMoreEducation = sessionStorage.getItem("AddMoreEducation");
    {
      savedAddMoreEducation != null &&
        setAddMoreEducation(JSON.parse(savedAddMoreEducation));
    }
    const savedAddMoreExperienceField = sessionStorage.getItem(
      "addMoreExperienceField"
    );
    {
      savedAddMoreExperienceField != null &&
        setAddMoreExperienceField(JSON.parse(savedAddMoreExperienceField));
    }

    const savedUniversityName = sessionStorage.getItem("UniversityName");
    {
      savedUniversityName != null &&
        setUniversityName(JSON.parse(savedUniversityName));
    }
    const savedSelectedDegree = sessionStorage.getItem("selectedDegree");
    {
      savedSelectedDegree != null &&
        setselectedDegree(JSON.parse(savedSelectedDegree));
    }
    const savedUniversityEndDate = sessionStorage.getItem("universityEndDate");
    {
      savedUniversityEndDate != null &&
        setUniversityEndDate(JSON.parse(savedUniversityEndDate));
    }
    const savedUniversityDescription = sessionStorage.getItem(
      "universityDescription"
    );
    {
      savedUniversityDescription != null &&
        setUniversityDescription(JSON.parse(savedUniversityDescription));
    }
    //
    //
    //
    const savedUniversityName2 = sessionStorage.getItem("UniversityName2");
    {
      savedUniversityName2 != null &&
        setUniversityName2(JSON.parse(savedUniversityName2));
    }
    const savedSelectedDegree2 = sessionStorage.getItem("selectedDegree2");
    {
      savedSelectedDegree2 != null &&
        setselectedDegree2(JSON.parse(savedSelectedDegree2));
    }
    const savedUniversityEndDate2 =
      sessionStorage.getItem("universityEndDate2");
    {
      savedUniversityEndDate2 != null &&
        setUniversityEndDate2(JSON.parse(savedUniversityEndDate2));
    }
    const savedUniversityDescription2 = sessionStorage.getItem(
      "universityDescription2"
    );
    {
      savedUniversityDescription2 != null &&
        setUniversityDescription2(JSON.parse(savedUniversityDescription2));
    }
  }, []);

  //
  //
  //
  //

  useEffect(() => {
    sessionStorage.setItem("SavedAboutMe", JSON.stringify(aboutMe));
    sessionStorage.setItem(
      "AddMoreEducation",
      JSON.stringify(addMoreEducation)
    );
    sessionStorage.setItem(
      "addMoreExperienceField",
      JSON.stringify(addMoreExperienceField)
    );
    sessionStorage.setItem("UniversityName", JSON.stringify(universityName));
    sessionStorage.setItem("selectedDegree", JSON.stringify(selectedDegree));
    sessionStorage.setItem(
      "universityEndDate",
      JSON.stringify(universityEndDate)
    );
    sessionStorage.setItem(
      "universityDescription",
      JSON.stringify(universityDescription)
    );
    sessionStorage.setItem("UniversityName2", JSON.stringify(universityName2));
    sessionStorage.setItem("selectedDegree2", JSON.stringify(selectedDegree2));
    sessionStorage.setItem(
      "universityEndDate2",
      JSON.stringify(universityEndDate2)
    );
    sessionStorage.setItem(
      "universityDescription2",
      JSON.stringify(universityDescription2)
    );
  }, [
    aboutMe,
    addMoreEducation,
    addMoreExperienceField,
    universityName,
    selectedDegree,
    universityEndDate,
    universityDescription,
    universityName2,
    selectedDegree2,
    universityEndDate2,
    universityDescription2,
  ]);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    if (nameValidator(name)) {
      setFirsNameOk(true);
      setFirstNameError(false);
      sessionStorage.setItem("SavedName", JSON.stringify(name));
    }

    if (lastNameValidator(lastName)) {
      setLastNameOk(true);
      setLastNameError(false);
      sessionStorage.setItem("SavedLastName", JSON.stringify(lastName));
    }

    if (emailValidator(email)) {
      setEmailOk(true);
      setEmailError(false);
      sessionStorage.setItem("SavedEmail", JSON.stringify(email));
    }

    if (phoneNumberValidator(phone)) {
      setPhoneOk(true);
      setPhoneError(false);
      sessionStorage.setItem("SavedPhone", JSON.stringify(phone));
    }
    if (position.length > 2) {
      setIvalidPosition(false);
      sessionStorage.setItem("SavedPosition", JSON.stringify(position));
    }
    if (employer.length > 2) {
      setInvalidEmployer(false);
      sessionStorage.setItem("SavedEmployer", JSON.stringify(employer));
    }
    if (startDate) {
      setExperienceStartdate(false);
      sessionStorage.setItem("SavedStartDate", JSON.stringify(startDate));
    }
    if (endDate) {
      setExperienceEnddate(false);
      sessionStorage.setItem("SavedEndDate", JSON.stringify(endDate));
    }
    if (aboutJob.length > 2) {
      setTextAreaRequired(false);
      sessionStorage.setItem("SavedAboutJob", JSON.stringify(aboutJob));
    }

    if (position2.length > 2) {
      setIvalidPosition2(false);
      sessionStorage.setItem("SavedPosition2", JSON.stringify(position2));
    }
    if (employer2.length > 2) {
      setInvalidEmployer2(false);
      sessionStorage.setItem("SavedEmployer2", JSON.stringify(employer2));
    }
    if (startDate2) {
      setExperienceStartdate2(false);
      sessionStorage.setItem("SavedStartDate2", JSON.stringify(startDate2));
    }
    if (endDate2) {
      setExperienceEnddate2(false);
      sessionStorage.setItem("SavedEndDate2", JSON.stringify(endDate2));
    }
    if (aboutJob2.length > 2) {
      setTextAreaRequired2(false);
      sessionStorage.setItem("SavedAboutJob2", JSON.stringify(aboutJob2));
    }
    if (universityName.length > 2) {
      setUniversityNameError(false);
      sessionStorage.setItem(
        "SavedUnivesityName",
        JSON.stringify(universityName)
      );
    }
    if (universityName2.length > 2) {
      setUniversityNameError2(false);
      sessionStorage.setItem(
        "SavedUnivesityName2",
        JSON.stringify(universityName2)
      );
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
    aboutJob,
    position2,
    employer2,
    startDate2,
    endDate2,
    aboutJob2,
    universityName,
    invalidPosition,
    invalidEmployer,
    invalidPosition2,
    invalidEmployer2,
  ]);

  // save information in sessionStorage end

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
    if (universityEndDate == "") {
      setUniversityEndDateError(true);
    }
    if (universityDescription == "") {
      setUniversityDescriptionError(true);
    }
    if (
      universityName2 == "" &&
      (selectedDegree2.length > 0 ||
        universityEndDate2.length > 0 ||
        universityDescription2.length > 0)
    ) {
      setUniversityNameError2(true);
    }
    if (
      selectedDegree2 == "" &&
      (universityName2.length > 0 ||
        universityEndDate2.length > 0 ||
        universityDescription2.length > 0)
    ) {
      setselectedDegreeError2(true);
    }
    if (
      universityEndDate2 == "" &&
      (universityName2.length > 0 ||
        selectedDegree2.length > 0 ||
        universityDescription2.length > 0)
    ) {
      setUniversityEndDateError2(true);
    }
    if (
      universityDescription2 == "" &&
      (universityName2.length > 0 ||
        selectedDegree2.length > 0 ||
        universityEndDate2.length > 0)
    ) {
      setUniversityDescriptionError2(true);
    }
    if (
      universityName &&
      selectedDegree &&
      universityEndDate &&
      universityDescription &&
      universityName2 == "" &&
      selectedDegree2 == "" &&
      universityEndDate2 == "" &&
      universityDescription2 == ""
    ) {
      console.log("Final result sent");
      //aq unda vqna axios post
    }
    if (
      universityName &&
      selectedDegree &&
      universityEndDate &&
      universityDescription &&
      universityName2 &&
      selectedDegree2 &&
      universityEndDate2 &&
      universityDescription2
    ) {
      console.log("Final result sent2");

      postRequest();
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
    if (
      position &&
      employer &&
      startDate &&
      endDate &&
      aboutJob &&
      addMoreExperienceField == false
    ) {
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

    if (
      addMoreExperienceField &&
      (position2.length > 0 ||
        employer2.length > 0 ||
        (startDate2.length > 0 && startDate2 != "") ||
        (endDate2.length > 0 && endDate2 != "") ||
        aboutJob2.length > 0)
    ) {
      setIvalidPosition2(true);
      setInvalidEmployer2(true);
      setExperienceStartdate2(true);
      setExperienceEnddate2(true);
      setTextAreaRequired2(true);
    }
    if (
      position &&
      employer &&
      startDate &&
      endDate &&
      aboutJob &&
      addMoreExperienceField &&
      position2 &&
      employer2 &&
      startDate2 &&
      endDate2 &&
      aboutJob2
    ) {
      setGoToEducationPage(true);
      setGoToExperiencePage(false);
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
    const requestDegree2 = async () => {
      const response2 = await axios.get(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data2 = response2.data;
      setdegree2(data2);
    };
    requestDegree2();
  }, []);

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
    setPhotoImageForAxios(event.target.files[0]);
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    setPhotoImage(imgUrl);
    setPhotoImageError(false);
    return true;
  };

  //experience Page setup start

  //experience Page setup end

  return (
    <PersonalContainer>
      <MainInput style={{ display: `${sentResult ? "none" : "flex"}` }}>
        {/* ეს არის პირველი ფეიჯის დასაწყისი */}

        {goToPersonalPage && (
          <PersonalInformation
            name={name}
            setName={setName}
            firsNameOk={firsNameOk}
            firstNameError={firstNameError}
            lastName={lastName}
            setLastName={setLastName}
            lastNameOk={lastNameOk}
            lastNameError={lastNameError}
            hiddenFileInput={hiddenFileInput}
            handleImgSave={handleImgSave}
            handleClick={handleClick}
            photoImageError={photoImageError}
            setAboutMe={setAboutMe}
            aboutMe={aboutMe}
            setEmail={setEmail}
            email={email}
            emailOk={emailOk}
            emailError={emailError}
            setPhone={setPhone}
            phone={phone}
            phoneOk={phoneOk}
            phoneError={phoneError}
            handleNextPageExperience={handleNextPageExperience}
          />
        )}

        {/* ეს არის პირველი ფეიჯის დასასრული */}
        {/* აქ იწყება გამოცდილების ფეიჯი */}

        {goToExperiencePage && (
          <ExperiencePage
            setPosition={setPosition}
            setEmployer={setEmployer}
            setStartDate={setStartDate}
            setExperienceStartdate={setExperienceStartdate}
            setEndDate={setEndDate}
            setExperienceEnddate={setExperienceEnddate}
            setAboutJob={setAboutJob}
            setTextAreaRequired={setTextAreaRequired}
            position={position}
            employer={employer}
            startDate={startDate}
            endDate={endDate}
            aboutJob={aboutJob}
            invalidPosition={invalidPosition}
            invalidEmployer={invalidEmployer}
            experienceStartdate={experienceStartdate}
            experienceEnddate={experienceEnddate}
            textAreaRequired={textAreaRequired}
            addMoreExperienceField={addMoreExperienceField}
            addMoreExperienceFunction={addMoreExperienceFunction}
            setPosition2={setPosition2}
            setEmployer2={setEmployer2}
            position2={position2}
            employer2={employer2}
            startDate2={startDate2}
            setStartDate2={setStartDate2}
            endDate2={endDate2}
            setEndDate2={setEndDate2}
            aboutJob2={aboutJob2}
            setAboutJob2={setAboutJob2}
            invalidPosition2={invalidPosition2}
            invalidEmployer2={invalidEmployer2}
            experienceStartdate2={experienceStartdate2}
            setExperienceStartdate2={setExperienceStartdate2}
            experienceEnddate2={experienceEnddate2}
            setExperienceEnddate2={setExperienceEnddate2}
            textAreaRequired2={textAreaRequired2}
            setTextAreaRequired2={setTextAreaRequired2}
            goBack1={goBack1}
            handleNextPageEducation={handleNextPageEducation}
          />
        )}
        {/* აქ მთავრდება გამოცდილების ფეიჯი */}

        {/* აქ იწყება განათლების ფეიჯი */}

        {goToEducationPage && (
          <EducationPage
            universityName={universityName}
            setUniversityName={setUniversityName}
            universityNameError={universityNameError}
            setShowDegree={setShowDegree}
            showDegree={showDegree}
            selectedDegree={selectedDegree}
            selectedDegreeError={selectedDegreeError}
            degree={degree}
            setselectedDegree={setselectedDegree}
            setselectedDegreeError={setselectedDegreeError}
            setUniversityEndDate={setUniversityEndDate}
            setUniversityEndDateError={setUniversityEndDateError}
            universityEndDate={universityEndDate}
            universityEndDateError={universityEndDateError}
            setUniversityDescription={setUniversityDescription}
            setUniversityDescriptionError={setUniversityDescriptionError}
            unviersityDescriptionError={unviersityDescriptionError}
            universityDescription={universityDescription}
            addMoreEducation={addMoreEducation}
            setAddMoreEducation={setAddMoreEducation}
            universityName2={universityName2}
            setUniversityName2={setUniversityName2}
            universityNameError2={universityNameError2}
            setShowDegree2={setShowDegree2}
            showDegree2={showDegree2}
            selectedDegree2={selectedDegree2}
            selectedDegreeError2={selectedDegreeError2}
            degree2={degree2}
            setselectedDegree2={setselectedDegree2}
            setselectedDegreeError2={setselectedDegreeError2}
            setUniversityEndDate2={setUniversityEndDate2}
            setUniversityEndDateError2={setUniversityEndDateError2}
            universityEndDate2={universityEndDate2}
            universityEndDateError2={universityEndDateError2}
            setUniversityDescription2={setUniversityDescription2}
            setUniversityDescriptionError2={setUniversityDescriptionError2}
            unviersityDescriptionError2={unviersityDescriptionError2}
            universityDescription2={universityDescription2}
            goBack2={goBack2}
            sendFinalResult={sendFinalResult}
            setDegreeIndex={setDegreeIndex}
          />
        )}
      </MainInput>

      <MainOutput>
        <MainContentContainer
          style={
            sentResult
              ? {
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "50%",
                  margin: "20px auto",
                  border: "0.8px solid #b6b2b2",
                  padding: "60px 20px 60px 40px",
                }
              : {}
          }
        >
          <CvFirstPart>
            {sentResult && removeFinalMessage && (
              <SuccessfullySentBox>
                <RemoveFinalMessage
                  onClick={() => {
                    setRemoveFinalMessage(false);
                  }}
                >
                  X
                </RemoveFinalMessage>
                <FinalMessage>რეზიუმე წარმატებით გაიგზავნა 🎉</FinalMessage>
              </SuccessfullySentBox>
            )}
            {sentResult && (
              <GoBack
                to={"/"}
                onClick={() => {
                  sessionStorage.clear();
                }}
              >
                &#60;
              </GoBack>
            )}

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
          {addMoreExperienceField && (
            <CvSecondPart>
              <HorisontalLine></HorisontalLine>
              <JobCompanyDatesContainer>
                <JobTitleAndCompanyName>
                  <JobTitleOrCompanyName>{position2},</JobTitleOrCompanyName>
                  <JobTitleOrCompanyName>{employer2}</JobTitleOrCompanyName>
                </JobTitleAndCompanyName>
                <StartEndDate>
                  <p>{startDate2}</p>
                  <span> - </span>
                  <p>{endDate2}</p>
                </StartEndDate>
              </JobCompanyDatesContainer>
              <AboutExperience>{aboutJob2}</AboutExperience>
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

          {addMoreEducation && (
            <CvThirdPart>
              <EducationDegreeDate>
                <JobTitleAndCompanyName>
                  <JobTitleOrCompanyName>
                    {universityName2},
                  </JobTitleOrCompanyName>
                  <JobTitleOrCompanyName>
                    {selectedDegree2}
                  </JobTitleOrCompanyName>
                </JobTitleAndCompanyName>
                <StartEndDate>
                  <p>{universityEndDate2}</p>
                </StartEndDate>
              </EducationDegreeDate>
              <AboutExperience>{universityDescription2}</AboutExperience>
            </CvThirdPart>
          )}
        </MainContentContainer>
      </MainOutput>
    </PersonalContainer>
  );
}

const RemoveFinalMessage = styled.div`
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 20px;
  font-family: "HelveticaNeue";

  &:hover {
    color: #d0200d;
    font-size: 25px;
    cursor: pointer;
    font-weight: 700;
  }
`;

const FinalMessage = styled.p`
  font-size: 25px;
`;

const SuccessfullySentBox = styled.div`
  height: 167px;
  width: 427px;
  border-radius: 8px;
  padding: 28px 30px 30px 30px;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 4px 28px 0px #00000040;
  position: absolute;

  left: 900px;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorisontalLine = styled.div`
  border-bottom: 1px solid #c1c1c1;
`;

const PersonFirsName = styled.h1`
  min-width: 130px;
  min-height: 45px;
`;
const PersonLastName = styled.h1`
  min-width: 170px;
  min-height: 45px;
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
  background-color: #ececec;
  position: absolute;
  right: 900px;
  &:hover {
    cursor: pointer;
  }
`;

const PersonalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* padding-bottom: 30px; */
  /* background-color: #f9f9f9; */
`;

const MainInput = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 90px 30px 90px;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const MainOutput = styled.div`
  height: 100%;
  width: 100%;
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
  position: relative;
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

import styled from "styled-components";
import FirstPage from "./assets/Pages/FirstPage";
import "../src/assets/Fonts/HelveticaNeue-01.ttf";
import "../src/assets/Fonts/HelveticaNeue-Bold-02.ttf";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./assets/Pages/PersonalInfo";
import ExperiencePage from "./assets/Pages/ExperiencePage";
import Education from "./assets/Pages/EducationPage";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="personalInfo" element={<PersonalInfo />} />
        <Route path="personalInfo/experience" element={<ExperiencePage />} />
        <Route
          path="personalInfo/experience/education"
          element={<Education />}
        />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div``;

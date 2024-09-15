import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicDetailsForResume from "./components/createResume/BasicDetailsForResume";
import EducationDetails from "./components/createResume/EducationDetails";
import Skills from "./components/createResume/Skills";
import ProfileSummary from "./components/createResume/ProfileSummary";

function App() {
  return (
    <>
      <h1>Data Wizard</h1>
      {/* Use BrowserRouter instead of Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicDetailsForResume />} />
          <Route path="/education-details" element={<EducationDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/profile-summary" element={<ProfileSummary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

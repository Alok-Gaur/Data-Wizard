import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Resume from "./components/Resume";
import Posts from "./components/Posts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicDetailsForResume from "./components/createResume/BasicDetailsForResume";
import EducationDetails from "./components/createResume/EducationDetails";
import Skills from "./components/createResume/Skills";
import ProfileSummary from "./components/createResume/ProfileSummary";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      
      {/* Use BrowserRouter instead of Router */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/basic-details" element={<BasicDetailsForResume />} />
          <Route path="/education-details" element={<EducationDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/profile-summary" element={<ProfileSummary />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Header />
      <main>
        <Outlet />
      </main>
      <Footer /> */}
    </Provider>
  );
}

export default App;

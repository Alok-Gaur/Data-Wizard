import { Link } from "react-router-dom";
import image from "../assets/resume.jpg";

import { Box } from "@mui/material";

const Resume = () => {
  return (
    <>
      <Box display={"flex"} sx={{ bgcolor: "lightgray" }}>
        <div className="resume-container">
          <div className="resume">
            <h1 className="resume-heading">
              Build Your Resume With Our Specialized AI(Image)
            </h1>
            <Link to="/basic-details">
              <button className="resumeButton">Create Resume</button>
            </Link>
          </div>

          <div className="resume-img" style={{ marginTop: "1px" }}>
            <img src={image} alt="" className="resumeimg" />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Resume;

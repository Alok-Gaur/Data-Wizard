import image from "../assets/resume.jpg"

const Resume = () => {
  return (
    <>
      
      <div className="resume-container">
        <div className="resume">
          <h1 className="resume-heading">
            Build Your Resume With Our Specialized AI(Image)
          </h1>
          <button className="resumeButton">Create Resume</button>
        </div>

        <div className="resume-img">
          <img src={image} alt="" className="resumeimg" />
        </div>
      </div>
    </>
  );
};

export default Resume;

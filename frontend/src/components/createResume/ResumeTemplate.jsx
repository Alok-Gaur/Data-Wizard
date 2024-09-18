import css from "./ResumeTemplate.module.css";

const ResumeTemplate = () => {
  return (
    <>
      <div className={css.resumeContainer}>
        <h1 className={css.resumeHeading}>Himanshu Jindal</h1>
        <div className={css.contactSection}>
          <div className="phone">
            <h5 className={css.h55}>Phone No: 7011216232</h5>
          </div>
          <hr />
          <div className="phone">
            <h5 className={css.h55}>Email id: himanshujindal201@gmail.com</h5>
          </div>
          <hr />
          <div className="phone">
            <h5 className={css.h55}>LinkedIn: www.LinkedIn.com</h5>
          </div>
          <hr />
          <div className="gitHub">
            <h5 className={css.h55}>GitHub: www.github.com</h5>
          </div>
        </div>
        <div className={css.summary}>
          <h3 className={css.h33}>Professional Summary</h3>
          <hr />
          <div className={css.summaryContent}>
            <p className={css.textSize}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              illo saepe a eum eligendi consectetur reiciendis hic aliquid
              dolores numquam officiis ipsam culpa, error odit aperiam vel
              aspernatur rem beatae!
            </p>
          </div>
        </div>
        <div className={css.skills}>
          <h3 className={css.h33}>Skills</h3>
          <hr />
          <div className={css.skillsList}>
            <ul className={`${css.skillsName} ${css.textSize}`}>
              <li>Python</li>
              <li>DSA</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className={css.Education}>
          <h3 className={css.h33}>Education</h3>
          <hr />
          <div className={css.college}>
            <h4 className={css.h44}>
              Meri College of Engineering and Technology , Sampla{" "}
            </h4>
            <div>
              <div className={css.textSize}>
                Pursuing B.tech Computer science
                <div className={css.EdTime}>2022 - Present</div>
              </div>
            </div>
          </div>
          <div className={css.Class12}>
            <h4 className={css.h44}>Sarvodaya Bal Vidyalaya, Ashok Nagar </h4>
            <div className={css.textSize}>
              Class 10: Percentage: 70%
              <div className={css.EdTime}>2020</div>
            </div>
          </div>
          <div className={css.Class10}>
            <h4 className={css.h44}>Sarvodaya Bal Vidyalaya, Ashok Nagar</h4>
            <div className={css.textSize}>
              Stream: Science
              <br />
              Class 12: Percentage 90%
              <div className={css.EdTime}>2022</div>
            </div>
          </div>
        </div>
        <div className={css.Work}>
          <h3 className={css.h33}>Work Experience</h3>
          <hr />
          <div className={css.Internship}>
            <h4 className={css.h44}>(Internship-Name)</h4>
            <h5 className={css.h44}>(Internship-Role)</h5>

            <div className={css.EdTime}>(Time-Date)</div>
            <div className={css.internDetails}>
              <ul className={css.textSize}>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  inventore minima ea, repellendus unde beatae qui nostrum
                  necessitatibus enim illum itaque blanditiis velit alias non
                  aliquam corporis ipsam voluptatum dicta.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  inventore minima ea, repellendus unde beatae qui nostrum
                  necessitatibus enim illum itaque blanditiis velit alias non
                  aliquam corporis ipsam voluptatum dicta.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={css.Project}>
          <h3 className={css.h33}>Projects</h3>
          <hr />
          <div className={css.ProjectsList}>
            <h4 className={css.h44}>(Project-Name)</h4>

            <div className={css.EdTime}>(Time-Date)</div>
            <div className={css.internDetails}>
              <ul className={css.textSize}>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  inventore minima ea, repellendus unde beatae qui nostrum
                  necessitatibus enim illum itaque blanditiis velit alias non
                  aliquam corporis ipsam voluptatum dicta.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  inventore minima ea, repellendus unde beatae qui nostrum
                  necessitatibus enim illum itaque blanditiis velit alias non
                  aliquam corporis ipsam voluptatum dicta.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className={css.h44}>(Project-Name)</h4>
            <div className={css.EdTime}>(Time-Date)</div>
            <div className={css.internDetails}>
              <ul className={css.textSize}>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  inventore minima ea, repellendus unde beatae qui nostrum
                  necessitatibus enim illum itaque blanditiis velit alias non
                  aliquam corporis ipsam voluptatum dicta.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  inventore minima ea, repellendus unde beatae qui nostrum
                  necessitatibus enim illum itaque blanditiis velit alias non
                  aliquam corporis ipsam voluptatum dicta.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.achievements}>
          <h3 className={css.h33}>Achievements</h3>
          <hr />
          <div className={css.aList}>
            <ul className={`${css.internDetails} ${css.textSize}`}>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iure quos sint rerum nulla facilis quidem perferendis
                quis architecto vero. Odio possimus eos ea tempora aut,
                voluptates optio. Consequatur, voluptas.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iure quos sint rerum nulla facilis quidem perferendis
                quis architecto vero. Odio possimus eos ea tempora aut,
                voluptates optio. Consequatur, voluptas.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeTemplate;

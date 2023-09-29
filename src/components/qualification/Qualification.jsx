import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification_button qualification_active button-flex"
                  : "qualification_button button-flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification_button qualification_active button-flex"
                  : "qualification_button button-flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase qualification_icon"></i>Experience
            </div>
          </div>

          <div className="qualification_sections">
            <div
              className={
                toggleState === 1
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">MERN Stack Web Development</h3>
                  <span className="qualification_subtitle">
                    Way 2 Code
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calender"></i>2023
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">B.Com</h3>
                  <span className="qualification_subtitle">
                    Gujarat University
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calender"></i>July 2016 - March 2019
                  </div>
                </div>
              </div>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">HSC</h3>
                  <span className="qualification_subtitle">
                    M K Patel High School
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calender"></i>2016
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">SSC</h3>
                  <span className="qualification_subtitle">
                    M K Patel High School
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calender"></i>2014
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}

            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">W3School</h3>
                  <span className="qualification_subtitle">
                    HTML, CSS, JS
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calender"></i>August 2023 - Current
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">React Portfolio</h3>
                  <span className="qualification_subtitle">
                    React JS
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calender"></i>June & July - 2023
                  </div>
                </div>
              </div>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Anita Dongre Homapage</h3>
                  <span className="qualification_subtitle">HTML, CSS</span>
                  <div className="qualification_calender">
                    <i className="uil uil-calender"></i>April
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualification;

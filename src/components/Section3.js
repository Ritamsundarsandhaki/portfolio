import React from 'react';

import '../css/Section3.css';

const Section3 = () => {
  return (
    <>
      <div className="section3" id='Education'>
        <div className="section3-heading">
          <h1>Education.</h1>
        </div>
        <div className="section3-box">
          <div className="section3-box-sec">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              color="purple"
              height="50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'purple' }}
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <div>
              <h2>Diploma in CSE (2022-2025)</h2>
              <p>
                <b>College</b> - NRI Institute of Research and Technology - [NIRT], Bhopal
              </p>
              <h5>With (7.89 CGPA)</h5>
            </div>
          </div>
          <div className="section3-box-sec">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              color="purple"
              height="50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'purple' }}
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <div>
              <h2>12th (2022-2023)</h2>
              <p>
                <b>School</b> - West Bengal Council of Higher Secondary Education (WBCHSE),
                West Bengal
              </p>
              <h5>With (N/A)</h5>
            </div>
          </div>
          <div className="section3-box-sec">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              color="purple"
              height="50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'purple' }}
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <div>
              <h2>10th (2021-2022)</h2>
              <p>
                <b>School</b> - West Bengal Board of Secondary Education (WBBSE)
              </p>
              <h5>With (7.89 CGPA)</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;

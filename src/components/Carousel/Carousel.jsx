import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import Button from 'react-bootstrap/Button';

const resumeLink = 'https://drive.google.com/file/d/1w?usp=sharing';

const ViewResumeButton = () => {
  const handleViewResume = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    window.open(resumeLink, '_blank'); // Open the resume link in a new tab
  };

  return (
    <li className='sidebar-nav-items'>
      <a href={resumeLink} onClick={handleViewResume} className='links'>
        VIEW RESUME
      </a>
    </li>
  );
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
};

const arrowStyle = {
  marginLeft: '5px',
};

export default ViewResumeButton;

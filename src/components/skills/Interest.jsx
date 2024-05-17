import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import classes from './Interest.module.css';

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id='interest'>
        <span className={classes.head}>WHAT I DO?</span>
        <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
        <div className={classes.Interest}>
          <div className={classes.expertiseBox}>
            <h3>Web Development</h3>
            <ul>
              <li><strong>Programming Languages:</strong> Python</li>
              <li><strong>Frontend Technologies:</strong> HTML/CSS, JavaScript</li>
              <li><strong>Frontend Frameworks:</strong> Angular 10,ReactJS</li>
              <li><strong>CSS Frameworks:</strong> Bootstrap</li>
              <li><strong>Web Frameworks:</strong> Django, DjangoRESTFramework, FastAPI</li>
              <li><strong>Database:</strong> Oracle, MySQL</li>
              <li><strong>ORM:</strong> DjangoORM</li>
              <li><strong>APIs & Tools:</strong> RESTful APIs, Postman</li>
              <li><strong>Authentication and Authorization:</strong> Django Authentication, JWT (JSON Web Tokens)</li>
              <li><strong>Version Control:</strong> Git, Github</li>
            </ul>
          </div>
          <div className={classes.expertiseBox}>
            <h3>Expanded Expertise</h3>
            <ul>
              <li><strong>Data Manipulation and Analysis:</strong> NumPy, Pandas</li>
              <li><strong>Data Visualization:</strong> Matplotlib, Seaborn, Power BI</li>
              <li><strong>Machine Learning Libraries:</strong> Scikit-learn</li>
              <li><strong>IDE:</strong> PyCharm, Jupyter Notebook, Google Colab</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Interest;

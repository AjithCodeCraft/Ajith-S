import React, { Component } from 'react';
import classes from './Education.module.css';
import { MdSchool } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      
      <><span style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>EDUCATION</span><div className={classes.box} id='education'>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>BSc Physics and Computer Application</h2>
                      <p>
                        University of Kerala (2023)<br />
                        Government College Kariavattom<br />
                        6.5 CGPA
                      </p>
                    </div>
                  </article>

                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>Board of Higher Secondary Education</h2>
                      <p>
                        St Josephs Higher Secondary School TVPM (2020 - 2023)<br />
                        Computer Science<br />
                        Percentage Scored: 70
                      </p>
                    </div>
                  </article>

                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>Govt of Kerala General Education Department</h2>
                      <p>
                        St Josephs Higher Secondary School TVPM (2018 - 2020)<br />
                        Grade: 6 A+
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div></>
    );
  }
}

export default Education;

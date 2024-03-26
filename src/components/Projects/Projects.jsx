import React, { Component } from 'react';
import classes from './Projects.module.css';

class Projects extends Component {
  render() {
    return (
      <div className={classes.box} id='projects'>
        
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                
                  <article className={classes.timeline_entry}>
                    
                      <h2 style={{ fontWeight: 'bold' }}>IT TRAINING</h2>
                      <p>
                        <b>Completed IT Career Program at Faith InfoTech Academy, Technopark with specialization in Full Stack Python, Django with Angular and Data Science and Machine Learning. Training Included basics of programming using Python, Database using Oracle and MySQL, Web application using Python Django Framework with Angular.</b>
                      </p>
                    
                  </article>
                  <span className={classes.head}>PROJECTS</span>
                  <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}></div>
                    <div className={classes.label}>
                      <h2 style={{ fontWeight: 'bold' }}>Clinical Management System (CMS) Development: Angular || DJANGO || 2024</h2>
                      <p>
                        As part of the clinical management system project, I spearheaded the development of modules dedicated to staff, medicine, test, and patient management. By systematically organizing personnel data, medications, and diagnostic tests, I significantly streamlined healthcare administration processes, ensuring efficiency and accuracy. Moreover, the system centralized patient records, facilitating seamless access to critical information and enhancing care continuity. In addition, I optimized appointment scheduling procedures, contributing to improved patient care delivery.
                      </p>
                      <pre><strong>Front End:</strong> Angular using HTML, CSS and Bootstrap.<br/>
                      <strong>Back End:</strong> Http Get and Post API using Django REST Framework.<br/>
                      <strong>Database:</strong> MySQL with Joins, CRUD operations, Normalization.<br/>
                      <strong>Role:</strong> As the receptionist for the clinical management system project, I played a pivotal role in ensuring efficient administrative operations. My responsibilities included managing patient inquiries, scheduling appointments, and maintaining accurate records. By promptly addressing patient needs and coordinating with staff members, I facilitated seamless communication and workflow within the healthcare facility.</pre>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}></div>
                    <div className={classes.label}>
                      <h2 style={{ fontWeight: 'bold' }}>Web Application: OTT Platform || 2023</h2>
                      <p>An Application for On Demand video playing similar to Amazon Prime Video, Netflix etc. Sub modules of- content management, content creator management and user management.</p>
                      <pre style={{ fontFamily: 'bold' }}><strong>Front End:</strong> HTML, CSS, Bootstrap with Django Templates<br/>
                      <strong>Back End:</strong> Django MVT backend with Django ORM.<br/>
                      <strong>Database:</strong> MySQL with Django ORM.<br/>
                      <strong>Role:</strong> In my involvement with the development of a Full Stack Application-OTT Platform, my primary emphasis was on managing content. I assumed a pivotal role in the incorporation of content creators, overseeing the platform's content, and upholding its overall quality standards.</pre>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}></div>
                    <div className={classes.label}>
                      <h2 style={{ fontWeight: 'bold' }}>Academic Project: All in one sports portal</h2>
                      <p>Developed a turf football league management website, leading full-stack development, including database design and implementation of both frontend and backend. Responsibilities included team management, player registrations, match scheduling, and standings. Ensured data security and collaborated closely with team members to deliver an intuitive platform for efficient league management, showcasing strong web development skills and teamwork.</p>
                      <pre style={{ fontFamily: 'bold' }}>
                        Front End: HTML , CSS, Bootstrap, JavaScript.<br/>
                        Back End : PHP<br/>
                        Database : MySQL with Joins, CRUD operations, Normalization.<br/>
                          </pre>



                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;

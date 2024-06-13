// LandingPage.js
import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import backgroundImage from './assets/image.jpg'; 
import defaultProfile from './assets/download.jpeg'; 
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


        

function LandingPage() {
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        if (storedFirstName) {
            setFirstName(storedFirstName);
        }
    }, []);

    return (
        <div className="landing-page">
            <div className="header">
                <span>Welcome {firstName}</span>
                <div className="profile-icon"></div>
            </div>
            <div className="content" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="top-section">
                    <div className="text-content">
                        <h1>The <span className="highlight">Smart</span> Choice For <span className="highlight">Future</span></h1>
                        <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
                    </div>
                    <div className="top-cards">
                        <div className="card">
                            <div className="card-icon books-icon"></div>
                            <h3>Books Library</h3>
                            <p>The gradual accumulation of information about</p>
                        </div>
                        <div className="card">
                            <div className="card-icon courses-icon"></div>
                            <h3>Training Courses</h3>
                            <p>The gradual accumulation of information about</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-cards">
                    <div className="card">
                        <div className="card-icon academics-icon"></div>
                        <h3>Academics</h3>
                        <p>The gradual accumulation of information about</p>
                    </div>
                    <div className="card">
                        <div className="card-icon grades-icon"></div>
                        <h3>Semester Grade Report</h3>
                        <p>The gradual accumulation</p>
                    </div>
                    <div className="card">
                        <div className="card-icon attendance-icon"></div>
                        <h3>Attendance</h3>
                        <p>The gradual accumulation</p>
                    </div>
                </div>
            </div>
            <div className="landing-page-2">
                <div className="landing-page-2-content">
                    <div className="profile-cards">
                        <div className="profile-card">
                            <img src={defaultProfile} alt="Profile" />
                            <div className="profile-info">
                                <h2>John Doe</h2>
                                <p>Professor @George Brown College</p>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                                <p>Engineering physics</p>
                                <div className="social-icons">
                                    <a href="LandingPage.js"><FaInstagram /></a>
                                    <a href="LandingPage.js"><FaTwitter /></a>
                                    <a href="LandingPage.js"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <img src={defaultProfile} alt="Profile" />
                            <div className="profile-info">
                                <h2>John Doe</h2>
                                <p>Professor @George Brown College</p>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                                <p>Engineering physics</p>
                                <div className="social-icons">
                                    <a href="LandingPage.js"><FaInstagram /></a>
                                    <a href="LandingPage.js"><FaTwitter /></a>
                                    <a href="LandingPage.js"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <img src={defaultProfile} alt="Profile" />
                            <div className="profile-info">
                                <h2>John Doe</h2>
                                <p>Professor @George Brown College</p>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                                <p>Engineering physics</p>
                                <div className="social-icons">
                                    <a href="LandingPage.js"><FaInstagram /></a>
                                    <a href="LandingPage.js"><FaTwitter /></a>
                                    <a href="LandingPage.js"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-links">
                        <div className="links-section">
                            <h4>USEFUL LINKS</h4>
                            <ul>
                                <li>Audit Report</li>
                                <li>MOOC Courses</li>
                                <li>Mandatory Disclosure</li>
                                <li>E-resources</li>
                                <li>Annual Reports</li>
                                <li>Higher Education Policy</li>
                                <li>Connection with companies</li>
                                <li>National Innovation and Startup Policy</li>
                                <li>Gallery</li>
                                <li>Nodal Officer</li>
                                <li>Visitor Number: 2483911</li>
                            </ul>
                        </div>
                        <div className="links-section">
                            <h4>QUICK LINKS</h4>
                            <ul>
                                <li>MOOC Courses</li>
                                <li>E-resources</li>
                                <li>E-learning</li>
                                <li>Non Teaching Staff</li>
                                <li>TEQIP</li>
                                <li>Workshop/Hackathon</li>
                                <li>RTI</li>
                            </ul>
                        </div>
                        <div className="links-section">
                            <h4>EXTERNAL LINKS</h4>
                            <ul>
                                <li>Mentor Details</li>
                                <li>Registrar</li>
                                <li>AICTE</li>
                                <li>Communities</li>
                                <li>DigiLocker</li>
                                <li>Online Payment Portal</li>
                                <li>B.Tech. Admissions</li>
                            </ul>
                        </div>
                        <div className="links-section">
                            <h4>CONTACT</h4>
                            <ul>
                                <li>Badliya Chouraha, N.H.8, Ajmer</li>
                                <li>principal@ecajmer.ac.in</li>
                                <li>principal.eca@rajasthan.gov.in</li>
                                <li>+911452971024</li>
                                <li>Portal, Rajasthan</li>
                                <li>missions</li>
                                <li>Press</li>
                                <li>NO Audit</li>
                                <li>GST No: 08ABABOP503P1ZZ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    );
}

export default LandingPage;

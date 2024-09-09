import React from 'react';

const About = () => {
    return (
        <>
            <div className="second-part">
                <div>
                    <h2>About Us</h2>
                </div>

                <div className="aboutus-content">
                    <h3>History</h3>
                    <p>A Public Sector Company registered under Section 42 of the Companies Act, 2017 as a not for profit Company (limited by guarantee). The promoter institution of NTS is the COMSATS University (CUI) and the Administrative Ministry of NTS is the Government of Pakistan, Ministry of Science & Technology.</p>
                </div>

                
                <div className="accordians" id="new">
                    <div className="accordians-heading" onFocus={() => focusFunction(this)} onBlur={() => blurFunction(this)}>
                        <i className="fa-solid fa-plus" style={{ color: '#b1b1b1' }}></i>
                        <p>Who we are</p>
                    </div>
                    <div className="accordians-content">
                        An internationally recognized testing and assessment organization facilitating in producing educated and market competitive human resource
                    </div>
                </div>

                
                
                <div>
                    <button className="view-detail">View Details</button>
                </div>
            </div>

            <div className="third-part">
                <div className="upper-portion">
                    <div>
                        <h2>Our Partners</h2>
                    </div>
                    <div className="divider-mini"></div>
                    <div className="images-frame">
                        <img src="images/pic1.jpg" />
                        <img src="images/pic2.jpg" />
                        <img src="images/pic3.jpg" />
                        <img src="images/pic4.jpg" />
                        <img src="images/pic5.jpg" />
                        <img src="images/pic6.png" />
                        <img src="images/pic7.jpg" />
                    </div>
                </div>
                <div className="lower-portion">
                    <div>
                        <h2>Divisions</h2>
                    </div>
                    <div className="buttons-frame">
                        <div className="part-one">
                            <p> Coordination & Operations<br />Division</p>
                        </div>
                        <div className="two-part">
                            <p> Academics &<br />Research<br />Division</p>
                        </div>
                        <div className="three-part">
                            <p> Corporate<br />Social<br />Responsibility</p>
                        </div>
                        <div className="two-part">
                            <p> Services<br />Corporate<br />Affairs Division</p>
                        </div>
                        <div className="part-one" id="last-one">
                            <p> International Collaboration & Accreditation Division</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

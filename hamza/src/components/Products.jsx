import React from 'react';

const Products = () => {
    return (
        <>
            <div className="one-part">
                <div>
                    <h2>Our Products</h2>
                </div>

                <div className="main-tabs">
                    
                    <div className="tab">
                        <button className="tablinks" >NAT</button>
                        <button className="tablinks" >GAT Subject</button>
                        <button className="tablinks" >GAT General</button>
                        <button className="tablinks" >TOEIC</button>
                        <button className="tablinks" >Future Products</button>
                    </div>
                    
                    
                    <div className="main-tab">
                        <div id="london" className="tabcontent">
                            <h5>NAT</h5>
                            <p>Candidates seeking admission in Under-graduate Programs of NTS Associated Universities and Degree Awarding Institutions (DAIs)..</p>
                        </div>
                        
                        <div id="paris" className="tabcontent">
                            <h5>GAT Subject</h5>
                            <p>For candidates seeking admission in PhD programs in all Universities of Pakistan.</p>
                        </div>
                        
                        <div id="tokyo" className="tabcontent">
                            <h5>GAT General</h5>
                            <p>For candidates seeking admission in graduate programs (MS/M-Phil/18 years of education) in HEC recognized Universities, Degree Awarding Institutions (DAIs) of Pakistan.</p>
                        </div>

                        <div id="AAA" className="tabcontent">
                            <h5>TOEIC</h5>
                            <p>Organizations and job seekers around the world trust TOEIC scores to help them get ahead of the competition..</p>
                        </div>

                        <div id="BBB" className="tabcontent">
                            <h5>Future Products</h5>
                            <p>With its visionary and dynamic leadership and committed staff, NTS is expanding the horizon of its test categories and subjects..</p>
                        </div>
                    </div>
                </div>
                
                <div className="icon-part">
                    <div className="icons">
                        <div className="icon-one">
                            <i className="fa-solid fa-book" style={{ color: '#fffafa' }}></i> 
                            <p className="icon-one-p">3000</p>
                            <p>Tests</p>
                        </div>
                        <div className="icon-one">
                            <i className="fa-solid fa-users-line" style={{ color: '#fafcff' }}></i>
                            <p className="icon-one-p">24079215</p>
                            <p>Candidates</p>
                        </div>
                        <div className="icon-one">
                            <i className="fa-solid fa-pencil" style={{ color: '#f7f9fc' }}></i> 
                            <p className="icon-one-p">1000+</p>
                            <p>Test Centers</p>
                        </div>
                        <div className="icon-one">
                            <i className="fa-solid fa-calendar-days" style={{ color: '#f3f4f7' }}></i>
                            <p className="icon-one-p">21</p>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;

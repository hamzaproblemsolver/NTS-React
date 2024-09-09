const Navigation = () => {
    return (
        <header id="new-header">
            <div className="first-container">
                <div className="main-logo">
                    <img src="images/nts_logo.png" className="logo" alt="NTS Logo"/>
                    <img src="images/header_imgN.png" className="logo" alt="Header Image"/>
                </div>
                <div className="top-nav">
                    <nav id="top-menu-nav">
                        <ul>
                            <li><a href="#"><span>Home</span></a>
                                <div className="sub-menu-1">
                                    <ul>
                                        <li><a href="index.html"><i className="fa-solid fa-period"></i>Home</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period" id="dot-icon"></i>Open Applications</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>List of Candidates</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>Results & Answer Keys</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>NTS code of Conducts</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>NTS Fee Payment Procedure</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>Audits Financials FY</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>About Us
                                <div className="sub-menu-1">
                                    <ul>
                                        <li><a href="about.html"><i className="fa-solid fa-period"></i>About Us</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>List of Candidates</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>Results & Answer Keys</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>NTS code of Conducts</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>NTS Fee Payment Procedure</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>Audits Financials FY</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                Test & Products
                                <div className="sub-menu-1">
                                    <ul>
                                        <li><a href="nationalTest.html"><i className="fa-solid fa-period"></i>National Aptitude Test(NTS)</a></li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li>CSR
                                <div className="sub-menu-1">
                                    <ul>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>Open Applications</a></li>
                                        <li><a href="#"><i className="fa-solid fa-period"></i>List of Candidates</a></li>
                                    </ul>
                                </div>
                            </li>
                           
    <li>Services</li>
    <li>Procurement</li>
    <li>Downloads</li>
    <li>Contact us
        <div className="sub-menu-1">
            <ul>
                <li><a href="contact.html"><i className="fa-solid fa-period"></i>Contact Us </a></li>
                <li><a href="#"><i className="fa-solid fa-period"></i>FAQS</a></li>
            </ul>
        </div>
    </li>


                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navigation;

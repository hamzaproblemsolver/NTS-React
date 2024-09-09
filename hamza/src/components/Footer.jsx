import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <div className="footer-left">
                        <div>
                            <h2>
                                CONTACT US<i className="fa-solid fa-graduation-cap"></i>
                            </h2>
                        </div>
                        <div>
                            <h3>
                                NTS call center
                            </h3>
                            <p>
                                It is for your information that NTS Call Center is now globally activated. You can contact at the number given below for all your queries and concerns. This number is operational. You can now contact us through this number and all other numbers for info/query are inactivated with immediate effect all over the Pakistan
                            </p>
                        </div>
                        <address>
                            <i className="fa-solid fa-phone"></i>+92-51-844-444-1<br />
                            <i className="fa-solid fa-envelope"></i>query@nts.org.pk<br />
                            <i className="fa-solid fa-link"></i>www.nts.org.pk<br />
                            <i className="fa-solid fa-house"></i>Plot # 96, Street # 4, H-8/1, Islamabad.
                        </address>
                        <div className="address-buttons">
                            <button><i className="fa-brands fa-facebook" style={{ color: '#eeeff1' }}></i></button>
                            <button><i className="fa-brands fa-twitter"></i></button>
                            <button><i className="fa-brands fa-linkedin"></i></button>
                        </div>
                        <input type="text" placeholder="SEARCH" />
                    </div>
                    <div className="footer-right">
                        <div>
                            <h2>
                                HEAD OFFICE LOCATION
                            </h2>
                        </div>
                        <div>
                            <img src="images/ssmap.png" alt="map" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

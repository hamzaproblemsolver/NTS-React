const Showcase = () => {
    return (
        <div class="background">
        <div className="main-showcase">
            <div className="showcase">
              
                <div className="slider">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/img1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/img2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                    <div className="images">
                        <div className="one">
                            <img src="images/logo1.png" alt="pic" />
                        </div>
                        <div className="two">
                            <img src="images/logo2.png" alt="pic" />
                        </div>
                        <div className="three">
                            <img src="images/logo3.png" alt="pic" />
                        </div>
                        
                    </div>
                </div>

                <div className="side-content">
                    <h4>Important Updates</h4>
                    <ul>
                        <li>
                            <strong>Please keep checking your email for roll number slip, result card and other information. NTS will mostly communicate via email.</strong>
                        </li>
                        <li>
                            <img src="images/sidelogo.jpg" style={{ width: '170px', float: 'left', margin: '0px 8px 3px 0px' }} alt="side logo" />
                            TOEIC (Listening and Reading) Public test is scheduled every month for registration and details <a href="TOEIC.php">click here</a>
                        </li>
                    
                      
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Showcase;

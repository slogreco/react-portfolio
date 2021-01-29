import React from "react";
import "./style.css";



function Footer() {
    return (
        <div>

            <footer className="page-footer">

                
                    <div className="row justify-content-center foot-background" >
                        <div className="row text-center">
                            <ul className="page-footer">
                                <a href="https://www.linkedin.com/in/shoshanahlogreco/"
                                    className="btn-floating btn-lg btn-a foot-text" type="button" role="button" target="_blank" rel="noreferrer"><i
                                        className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/slogreco" className="btn-floating btn-lg btn-git foot-text" 
                                    type="button" role="button" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                                <a href="mailto:shoshanahlogreco@gmail.com" className=" btn-floating btn-lg btn-email foot-text"
                                    type="button" role="button" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>

                                <br />
                                <p className="foot-title">&copy;
                                2021 Shoshanah Lo Greco. All rights reserved.
                                </p>
                            </ul>
                        </div>
                    </div>
            

            </footer>

        </div>
    )
}

export default Footer;
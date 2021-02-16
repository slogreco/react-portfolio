import React from "react";
import "./style.css";
import FooterButton from "../FooterButton/FooterButton";


function Footer() {
    return (
        <div>

            <footer className="page-footer">

                
                    <div className="row justify-content-center foot-background" >
                        <div className="row text-center">
                            <ul className="page-footer">
                            <FooterButton href="https://www.linkedin.com/in/shoshanahlogreco/">
                                <i className="fab fa-linkedin-in"></i>
                            </FooterButton>
                            <FooterButton href="https://github.com/slogreco">
                                <i className="fab fa-github"></i>
                            </FooterButton>
                            <FooterButton href="mailto:shoshanahlogreco@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </FooterButton>
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
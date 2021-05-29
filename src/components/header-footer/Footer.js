import React from "react";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <footer className="bck_black ">
      <Fade delay={1000}>
        <div className="footer-box">
          <div className="p-box">
            <p className="address-p">
              Palais Garnier
              <br />
              Place de l'Opéra
              <br />
              75009 Paris
            </p>
          </div>
        </div>
      </Fade>
      <p className="copyright-p">© 2021 copyright - all rights reserved</p>
    </footer>
  );
}

export default Footer;

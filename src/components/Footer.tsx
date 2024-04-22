import "../assets/css/extra.css";

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-info">
                <h3>613 Inspections Inc.</h3>
                <p>
                  <strong>Phone:</strong> +1 613-410-1357
                  <br />
                  <strong>Email:</strong> info@613inspections.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
                  {/* <a href="#" className="facebook"
                   ><i className="bx bxl-facebook"></i
                  ></a>  */}
                  <a
                    href="https://www.instagram.com/613inspections/"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  {/* <a href="#" className="google-plus"
                   ><i className="bx bxl-skype"></i
                  ></a> */}
                  {/* <a href="#" className="linkedin"
                   ><i className="bx bxl-linkedin"></i
                  ></a> */}
                </div>
              </div>
            </div>

            <div className="col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#services">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span>613 Inspections Inc.</span>
          </strong>{" "}
          All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://bootstrapmade.com/" className="myLink">
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
}

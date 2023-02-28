import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white" style={{ backgroundColor: '#0B1011',}}>
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              {/* <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright" style={{color: '#F5F5F5' , fontSize: '15px'}}>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" style={{color: "#1363DF"}} /> by Hamdi MK
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

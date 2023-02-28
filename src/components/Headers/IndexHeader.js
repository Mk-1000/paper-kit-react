import React from "react";

// reactstrap components
import { Container } from "reactstrap";


function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title" style={{ fontSize: "4rem" }}>YouDow</h1>
            </div>

            <div className="title-brand">
              <h3 className=" text-center" style={{color:"#DFF6FF" ,fontFamily:"sans-serif",fontSize: "2rem" }}> You press the button and youdow the rest. </h3>
            </div>
              
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds2.png") + ")"
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.linkedin.com/in/mokni-hamdi-mk712"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo" 
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;

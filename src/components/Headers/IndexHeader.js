import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

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
              <h1 className="presentation-title">YouDow</h1>
             
            </div>
            <h2 className="presentation-subtitle text-center">
            Without music, life would be a mistake. </h2>

          <a
            href="https://www.linkedin.com/in/mokni-hamdi-mk712"
            target="_blank"
          >
            <p className="text-center" > Friedrich Nietzsche </p>
          </a>
            
            
            
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
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

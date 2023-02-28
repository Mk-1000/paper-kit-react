/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/light.png"),
    altText: "Light Mode",
    caption: "Light Mode"
    
  },
  {
    src: require("assets/img/dark.png"),
    altText: "Dark Mode",
    caption: "Dark Mode"
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-dark" id="carousel" >
        
        <Container>
          <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title">Do you like what you see?</h1>
              <p className="description">
                Cause if you do, it can be yours for Free. Hit the button below
                and download it. Start a new project or give an old Bootstrap 4
                project a new look.
              </p>
              <br></br>
            </Col>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel" >
                <Carousel
                
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                          className={item.altText.toLowerCase().replace(' ', '-')}
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"

                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                    
                  </a>
                  <a
                  
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"

                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
           
          </Row>
        </Container>
        
        <br></br>
        <br></br>
        <div class="container-divider"></div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Container>
            <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                <h1 className="title">Do you like what you see?</h1>
                <p className="description">
                    Cause if you do, it can be yours for Free. Hit the button below
                    and download it. Start a new project or give an old Bootstrap 4
                    project a new look.
                </p>
                </Col>

                <Col className="ml-auto mr-auto text-center" md="8">
                <br></br>
                <Button
                  className="btn-round"
                  color="info"
                  download="YouDow_setup.exe"
                  href='https://drive.google.com/u/2/uc?id=1DWvs3NvIYNAOABPHSLDXCRp89ZSYa4-l&export=download&confirm=t&uuid=a910b1bb-e469-4a85-9dca-350ea9d2ae90&at=ALgDtsw1k8lkYbZnbjXG6IwlCiWr:1677530200620'
                >
                  Download YouDow
                </Button>
                <br></br> <br></br>
                <p className="description">  Version 1.0.00  •  Windows 64bit  •  30 MB </p>
                </Col>

          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;

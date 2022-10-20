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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Input,
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover
} from "reactstrap";

// core components

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section javascript-components "  style={{ backgroundColor: '#0B1011',}}>
      
        <Container className="ml-auto mr-auto text-center">
          
          <div className="title">
            <h2>Download YouTube video in MP4 and other formats</h2>
          </div>
          <br /><br /><br />
          <Row id="modals">
            
           <Col className="ml-auto mr-auto text-center">
            
              <Button 
                className="btn mr-4"
                color="danger"
                id="tooltip344834141"
                outline size="lg"
                onClick={(e) => e.target.focus()}
              >
                Single Link
              </Button>
              <UncontrolledPopover
                placement="top"
                target="tooltip344834141"
                trigger="focus"
              >
                <PopoverHeader>Single Link</PopoverHeader>
                <PopoverBody>
                Paste the link of the Yotube video .
                </PopoverBody>
              </UncontrolledPopover>


              <Button
              outline size="lg"
                className="btn mr-4"
                color="danger"
                id="tooltip493417725"
                
                onClick={(e) => e.target.focus()}
              >
                Playlist
              </Button>
              <UncontrolledPopover
                placement="top"
                target="tooltip493417725"
                trigger="focus"
              >
                <PopoverHeader>Playlist</PopoverHeader>
                <PopoverBody>
                Paste the link of the Yotube playlist .
                </PopoverBody>
              </UncontrolledPopover>


              <Button
                className="btn mr-4"
                color="danger"
                id="tooltip746845223"
                outline size="lg"
                onClick={(e) => e.target.focus()}
              >
                Channel
              </Button>
              <UncontrolledPopover
                placement="top"
                target="tooltip746845223"
                trigger="focus"
              >
                <PopoverHeader>Channel</PopoverHeader>
                <PopoverBody>
                  Paste the link of the youtube channel.
                </PopoverBody>
              </UncontrolledPopover>


              <Button
                className="btn mr-4"
                color="danger"
                id="tooltip909471006"
                outline size="lg"
                onClick={(e) => e.target.focus()}
              >
                Channel ++
              </Button>
              <UncontrolledPopover
                placement="top"
                target="tooltip909471006"
                trigger="focus"
              >
                <PopoverHeader>Channel ++</PopoverHeader>
                <PopoverBody>
                Paste the link of the youtube channel.
                </PopoverBody>
              </UncontrolledPopover>
            
            <br />
           
           </Col>
             
          </Row>
        
        </Container>

        <Container>

          <br /><br />
          <Row>
            
            <Col sm="6" className="ml-auto mr-auto text-center">
              <FormGroup>
                <Input placeholder="https://www.youtube-link.com/" type="text" />
                
              </FormGroup>
              <br />
              <FormGroup>
              <Button color="danger" type="button">
                    Download
              </Button>
              </FormGroup>
            </Col>
            
          </Row>

          <br />

        </Container>

      </div>{" "}
    </>
  );
}

export default SectionJavaScript;

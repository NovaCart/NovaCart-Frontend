import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Footer() {
  return (
    <div className="bg-black py-4 text-white">
      <Row className="mb-4 mx-4">
        <Col md={6}>
          <h3 className="font-weight-bold">Become an Insider</h3>
          <p>Get the latest updates from NovaCart</p>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Your email address"
              className="bg-black text-white border-0 border-bottom"
              style={{
                borderBottom: "2px solid white",
                width: "50%",
                borderRadius: 0,
                padding: "5px 0",
              }}
            />
            <Button variant="outline-light" className="ms-4">
              Sign Up
            </Button>
          </Form>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-end align-items-center mt-0"
        >
          <div className="d-flex flex-column align-items-end">
            <div className="d-flex mb-5">
              <p className="mx-3 mb-0">How it works</p>
              <p className="mx-3 mb-0">Sale</p>
              <p className="mx-3 mb-0">Shipping</p>
              <p className="mx-3 mb-0">Review</p>
              <p className="mx-3 mb-0">Newstand</p>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <img
                src="/images/fb.png"
                alt="Facebook"
                style={{ width: "20px" }}
              />
              <img
                src="/images/inster.png"
                alt="Instagram"
                style={{ width: "20px" }}
              />
              <img
                src="/images/x.png"
                alt="Twitter"
                style={{ width: "20px" }}
              />
              <img
                src="/images/yt.png"
                alt="YouTube"
                style={{ width: "20px" }}
              />
              <img
                src="/images/apple.png"
                alt="Apple"
                style={{ width: "20px" }}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mx-5 px-5">
        <Col md={12} className="text-center">
          <p className="fw-light">
            NovaCart web cares about all of our customers and strives to make
            our website, www.NovaCart.com, accessible to all visitors.
            Accordingly, we have a dedicated team that reviews and evaluates our
            website pursuant to web content accessibility guidelines 2.0, who
            are currently working with various partners to implement practicable
            features to improve the overall experience for our website visitors.
            As a result, NovaCart web is in the continuous process of enhancing
            the usability of our website to foster inclusivity and diversity.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <small>
            Copyright © 2024 NovaCart.com | Privacy Policy | Terms of Use
          </small>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;

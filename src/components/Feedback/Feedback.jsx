<<<<<<< Updated upstream
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Feedback.css";

export const Feedback = () => {
  return (
    <Form>
      <Form.Control
        placeholder="Enter the Title..."
        className="fbrow"
      ></Form.Control>
      <Form.Control
        as="textarea"
        placeholder="Enter Feedback here..."
        className="fbrow"
      ></Form.Control>
      <Row className="fbrow">
        <Col lg={8}></Col>
        <Col lg={1}>
          <Button>Submit</Button>
        </Col>
        <Col lg={1}>
          <Button>Cancel</Button>
        </Col>
        <Col lg={2}></Col>
      </Row>
=======
import Button from "@restart/ui/esm/Button";
import { Row, Form, Col } from "react-bootstrap";
import "./feedback.css"
export const Feedback = () => {
  return (
    <Form>
    <Row>
    
     <>
  <Form.Control size="lg" type="text" placeholder="Large text" />
  <br />
  <Form.Control type="text" placeholder="Normal text" />
  <br />
  <Form.Control size="sm" type="text" placeholder="Small text" />
</>


     
    </Row>
>>>>>>> Stashed changes
    </Form>
  );
};

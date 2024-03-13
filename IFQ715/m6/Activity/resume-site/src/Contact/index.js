import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function BusinessCard(){
    return (
        <Row>
            <Col lg={6}>
                <Card>Hello</Card>
            </Col>
            <Col lg={6}>
                <Card>Hello</Card>
            </Col>
        </Row>
    );
}

export default function Contact(){
    return (
        <section id="contact">

            <Row>
                <Col lg={4}></Col>
                <Col lg={4} className="pt-5"><BusinessCard/></Col>
                <Col lg={4}></Col>
            </Row>

        
 

        </section>
    );
}
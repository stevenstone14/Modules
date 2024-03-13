import { Row, Col } from "react-bootstrap";

export default function Contact(){
    return (
        <section id="contact">
            <div className="viewport-height-75 d-flex align-items-center">
                <div className="w-100">
                    <Row>
                        <Col className="text-center mb-5 fs-1 text-seconday">
                            <i className="fa-solid fa-thumbs-up thumb-icon me-3"></i>
                            Welcome to the home page.
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}
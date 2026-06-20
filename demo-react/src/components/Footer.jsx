import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>CourseHub</h5>
            <p className="text-secondary">
              Learn new skills online with expert-led courses and hands-on
              projects.
            </p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-secondary text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="text-secondary text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-secondary text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact</h5>
            <p className="text-secondary mb-1">
              Email: info@coursehub.com
            </p>
            <p className="text-secondary mb-1">
              Phone: +20 100 123 4567
            </p>
            <p className="text-secondary">
              Mansoura, Egypt
            </p>
          </Col>
        </Row>

        <hr className="my-3" />

        <div className="text-center text-secondary">
          © {new Date().getFullYear()} CourseHub. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
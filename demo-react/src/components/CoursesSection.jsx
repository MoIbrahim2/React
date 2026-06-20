import CourseCard from './CourseCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CoursesSection() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">
        Featured Courses
      </h2>

      <Row className="g-4">
        <Col md={6} lg={4}>
          <CourseCard />
        </Col>

        <Col md={6} lg={4}>
          <CourseCard />
        </Col>

        <Col md={6} lg={4}>
          <CourseCard />
        </Col>
      </Row>
    </Container>
  );
}

export default CoursesSection;
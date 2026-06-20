import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CourseCard() {
    const title = "React Fundamentals";
    const description = "Learn the fundamentals of React including components, props, state, hooks, and modern development practices.";
    const duration = "6 weeks";
    const image = "../src/images/course_card.webp";
    const isAvailable = false;
  return (
    <Card className="h-100 shadow-sm border-0 rounded-4">
      <Card.Img
        variant="top"
        src={image}
        alt="Course"
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text className="text-muted">
          {description}
        </Card.Text>
        <Card.Text className="text-muted">
          Duration: {duration}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-primary">$49.99</span>

          {isAvailable ? (
            <Button variant="primary">
              Start Course
            </Button>
          ) : (
            <Button variant="secondary" disabled>
                Coming Soon
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      title: 'Learn New Skills Online',
      description:
        'Discover hundreds of courses taught by industry experts.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      title: 'Boost Your Career',
      description:
        'Gain practical experience and prepare for your dream job.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
      title: 'Study Anytime Anywhere',
      description:
        'Learn at your own pace from any device in the world.',
    },
  ];

  return (
    <Carousel
      activeIndex={index}
      onSelect={(selectedIndex) => setIndex(selectedIndex)}
      fade
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '450px',
            }}
          >
            <div
              className="w-100 h-100 d-flex align-items-center"
              style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}
            >
              <div className="container text-white">
                <div className="row">
                  <div className="col-lg-7">
                    <h1 className="display-3 fw-bold mb-3">
                      {slide.title}
                    </h1>

                    <p className="lead mb-4">
                      {slide.description}
                    </p>

                    <div className="d-flex gap-3">
                      <Button variant="primary" size="lg">
                        Explore Courses
                      </Button>

                      <Button variant="outline-light" size="lg">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
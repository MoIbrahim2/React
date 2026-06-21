import CourseCard from "../../components/CourseCard/CourseCard";
import styles from "./Courses.module.css";
import { useState, useEffect } from "react";
function Courses() {
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        console.log("Current search term:", searchTerm);
    }, [searchTerm]);
  const courses = [
    { id: 1, title: "React for Beginners", duration: "4 weeks" },
    { id: 2, title: "Advanced React", duration: "6 weeks" },
    { id: 3, title: "React and Redux", duration: "8 weeks" },
  ];

  return (
    <div className={styles.container}>
      <h1>Our Courses</h1>
        <input className={styles.searchInput}
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <div className={styles.courseGrid}>
        {courses
          .filter((course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
      </div>
    </div>
  );
}

export default Courses;
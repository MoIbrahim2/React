import CourseCard from "../../components/CourseCard/CourseCard";
import styles from "./Courses.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../api/api";
function Courses() {

    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
useEffect(() => {
  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get("/posts?_limit=10");
      console.log(response.data);
      setCourses(response.data);
    } catch (err) {
      setError("Failed to load courses.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, []);

  return (
    <div className={styles.container}>
        <Link
          to="add"
          className={styles.addButton}
        >
          Add New Course
        </Link>
      <h1>Our Courses</h1>
        <input className={styles.searchInput}
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <div className={styles.courseGrid}>
        {loading && <p>Loading courses...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          courses
            .filter((course) =>
              course.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((course) => (
              <CourseCard
              key={course.id}
              course={course}
            />
          )))}
      </div>
    </div>
  );
}
export default Courses;
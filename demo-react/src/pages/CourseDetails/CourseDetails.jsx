import { useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api/api";
function CourseDetails() {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await api.get(`/posts/${id}`);

                setCourse(response.data);
            } catch (err) {
                setError("Failed to load course details.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseDetails();
    }, [id]);
  return (
   <div className={styles.container}>
  <h1>Course Details</h1>

  {loading && <p>Loading course details...</p>}

  {error && <p>{error}</p>}

  {!loading && !error && (
    <div className={styles.card}>
      <div className={styles.detailRow}>
        <span className={styles.label}>Course ID</span>
        <span>{id}</span>
      </div>

      <div className={styles.detailRow}>
        <span className={styles.label}>Title</span>
        <span>{course?.title}</span>
      </div>

      <div className={styles.detailRow}>
        <span className={styles.label}>Description</span>
        <p className={styles.description}>
          {course?.body}
        </p>
      </div>
    </div>
  )}
</div>);
}

export default CourseDetails;
import { useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import { useEffect } from "react";
function CourseDetails() {
  const { id } = useParams();
    useEffect(() => {
        console.log("Course page mounted");
        return () => {
            console.log("Course page unmounted");
        }; 
    })
  return (
    <div className={styles.container}>
      <h1>Course Details</h1>

      <div className={styles.card}>
        <p>
          <strong>Course ID:</strong> {id}
        </p>
      </div>
    </div>
  );
}

export default CourseDetails;
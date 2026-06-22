import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";
import { useState } from "react";
function CourseCard({ course }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <h2>{course.title}</h2>

      <Link
        to={`/courses/${course.id}`}
        className={styles.detailsButton}
      >
        View Details
      </Link>
       <button
          onClick={handleFavorite}
          className={
            isFavorite
              ? styles.favoriteActive
              : styles.favoriteButton
          }
        >
          {isFavorite
            ? "Added To Favorite ❤"
            : "Add To Favorite"}
        </button>
    </div>
  );
}

export default CourseCard;
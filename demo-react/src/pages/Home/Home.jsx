import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to CourseNav</h1>

        <p>
          Discover high-quality courses and take the next step in your learning
          journey. Browse our collection of courses and start learning today.
        </p>

        <Link to="/courses" className={styles.button}>
          Explore Courses
        </Link>
      </div>
    </section>
  );
}

export default Home;
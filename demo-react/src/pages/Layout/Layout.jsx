import { Outlet,useLocation } from "react-router-dom"
import { useEffect } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Layout.module.css"
function Layout() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "CourseNav | Home";
        break;

      case "/about":
        document.title = "CourseNav | About";
        break;

      case "/courses":
        document.title = "CourseNav | Courses";
        break;

      case "/courses/add":
        document.title = "CourseNav | Add Course";
        break;

      default:
        if (location.pathname.startsWith("/courses/")) {
          document.title = "CourseNav | Course Details";
        } else {
          document.title = "CourseNav | Not Found";
        }
    }
  }, [location]);
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
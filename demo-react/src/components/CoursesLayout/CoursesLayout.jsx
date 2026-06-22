import { Outlet } from "react-router-dom";

function CoursesLayout() {
  return (
    <div>
      <h1>Courses</h1>
      <Outlet />
    </div>
  );
}

export default CoursesLayout;
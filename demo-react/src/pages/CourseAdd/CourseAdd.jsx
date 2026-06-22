import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import styles from "./CourseAdd.module.css";
import api from "../../api/api";

function CourseAdd() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSuccessMessage("");

      await api.post("/posts", data);

      setSuccessMessage("Course added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setSuccessMessage("Failed to add course.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add New Course</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Title */}
        <div className={styles.formGroup}>
          <label>Title</label>

          <input
            type="text"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
          />

          {errors.title && (
            <p className={styles.error}>
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Duration */}
        <div className={styles.formGroup}>
          <label>Duration</label>

          <input
            type="text"
            placeholder="e.g. 8 weeks"
            {...register("duration", {
              required: "Duration is required",
            })}
          />

          {errors.duration && (
            <p className={styles.error}>
              {errors.duration.message}
            </p>
          )}
        </div>

        {/* Instructor */}
        <div className={styles.formGroup}>
          <label>Instructor</label>

          <input
            type="text"
            {...register("instructor", {
              required: "Instructor is required",
              minLength: {
                value: 3,
                message:
                  "Instructor name must be at least 3 characters",
              },
            })}
          />

          {errors.instructor && (
            <p className={styles.error}>
              {errors.instructor.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className={styles.formGroup}>
          <label>Description</label>

          <textarea
            rows="5"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message:
                  "Description must be at least 10 characters",
              },
            })}
          />

          {errors.description && (
            <p className={styles.error}>
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Add Course"}
        </button>

        {successMessage && (
          <p className={styles.success}>
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default CourseAdd;
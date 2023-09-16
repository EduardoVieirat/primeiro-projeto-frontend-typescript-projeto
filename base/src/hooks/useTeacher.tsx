import Teacher from "../types/teacher";

export default function useTeacherDetail() {
  function insertTeacher(teacher: Teacher) {
    localStorage.setItem("current-teacher", JSON.stringify(teacher));
  }

  function getTeacher(): Teacher | null {
    const currentTeacher = localStorage.getItem("current-teacher")
      ? JSON.parse(localStorage.getItem("current-teacher")!)
      : null;

    return currentTeacher;
  }

  return {
    insertTeacher,
    getTeacher,
  };
}

import { useEffect, useState } from "react";
import Header from "../../components/header";
import TeacherCard from "../../components/teacherCard";
import api from "../../services/api";
import "./styles.css";
import Teacher from "../../types/teacher";

export default function Main() {
  const [allTeachers, setAllTeacher] = useState<Teacher[]>([]);

  async function loadTeacher() {
    try {
      const reponse = await api.get("/teachers");

      setAllTeacher([...reponse.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTeacher();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="main-teachers">
        {allTeachers.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher.id} />
        ))}
      </div>
    </div>
  );
}

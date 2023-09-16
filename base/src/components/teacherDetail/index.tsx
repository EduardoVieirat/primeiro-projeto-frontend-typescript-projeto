import { useEffect, useState } from "react";
import useTeacherDetail from "../../hooks/useTeacher";
import Avatar from "../avatar";
import Header from "../header";
import "./style.css";
import Teacher from "../../types/teacher";

export default function TeacherDetail({}) {
  const { getTeacher } = useTeacherDetail();
  const [currentTeacherDetail, setCurrentTeacherDetail] = useState<Teacher>();

  useEffect(() => {
    const currentTeacher = getTeacher();

    if (currentTeacher) {
      setCurrentTeacherDetail(currentTeacher);
    }
  }, []);

  return (
    <div className="container">
      <Header showBack />

      <div className="teacher-card-Detail">
        <Avatar image={currentTeacherDetail?.avatar || ""} size={200} />

        <h1>{currentTeacherDetail?.name}</h1>
        <span>{currentTeacherDetail?.stack}</span>

        <div className="line" />

        <h3>Bio</h3>

        <p>{currentTeacherDetail?.bio}</p>
      </div>
    </div>
  );
}

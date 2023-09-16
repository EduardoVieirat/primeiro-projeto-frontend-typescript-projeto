import { useNavigate } from "react-router-dom";
import Avatar from "../avatar";
import "./style.css";
import useTeacherDetail from "../../hooks/useTeacher";
import Teacher from "../../types/teacher";

type Props = {
  teacher: Teacher;
};

export default function TeacherCard({ teacher }: Props) {
  const navigate = useNavigate();
  const { insertTeacher } = useTeacherDetail();

  function handleTeacherDetail() {
    insertTeacher(teacher);
    navigate("/teacher-detail");
  }

  return (
    <div className="teacher-card" onClick={() => handleTeacherDetail()}>
      <Avatar image={teacher.avatar} />
      <h2>{teacher.name}</h2>
    </div>
  );
}

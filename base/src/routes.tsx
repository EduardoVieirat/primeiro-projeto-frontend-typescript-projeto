/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SingIn";
import useAuth from "./hooks/useAuth";
import TeacherDetail from "./components/teacherDetail";

type Props = {
  redirectTo: string;
};

export default function MainRoutes() {
  function ProtectedRoutes({ redirectTo }: Props) {
    const { getToken } = useAuth();

    return getToken() ? <Outlet /> : <Navigate to={redirectTo} />;
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route element={<ProtectedRoutes redirectTo="/sign-in" />}>
        <Route path="/main" element={<Main />} />
        <Route path="/teacher-detail" element={<TeacherDetail />} />
      </Route>
    </Routes>
  );
}

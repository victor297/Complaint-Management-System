import { Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "../Components/Complain-Page/DashBoard";
import Login from "../Components/Login/Login";
import SignUp from "../Components/signup/SignUp";

import CreateComplainPage from "../Components/Create-Complain-Page/CreateComplainPage";
import { useAuth } from "../Components/Contexts/AuthContext";

export default function CMSRoutes() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <Routes>
{/*         <Route exact path="*" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route exact path="*" element={<Navigate to="/dashboard" />} />
      <Route exact path="/dashboard" element={<DashBoard />} />
      <Route
        exact
        path="/:category/create-complain"
        element={<CreateComplainPage />}
      />
    </Routes>
  );
}

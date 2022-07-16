import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

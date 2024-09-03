import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
}

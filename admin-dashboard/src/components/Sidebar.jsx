import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div
      className="bg-dark text-white p-3 d-flex flex-column"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <h4 className="text-center mb-4">Admin</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link
            to="/dashboard"
            className={`nav-link text-white ${
              location.pathname === "/dashboard" ? "bg-primary rounded" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link
            to="/users"
            className={`nav-link text-white ${
              location.pathname === "/users" ? "bg-primary rounded" : ""
            }`}
          >
            Users
          </Link>
        </li>

        <li className="nav-item mt-4">
          <button
            className="btn btn-danger w-100"
            onClick={logout}
          >
            Logout
          </button>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
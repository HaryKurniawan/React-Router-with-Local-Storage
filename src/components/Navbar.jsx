import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <nav style={{ display: "flex", gap: "16px", padding: "16px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {isLoggedIn ? (
        <>
          <Link to="/Cart">Cart</Link>
          <Link to="/Profile">Profile</Link>
        </>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;

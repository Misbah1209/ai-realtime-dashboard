import React from "react";
import { useThemeStore } from "../../store/useThemeStore";
import "./navbar.css";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">AI Realtime Dashboard</span>
      </div>

      <div className="navbar-right">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

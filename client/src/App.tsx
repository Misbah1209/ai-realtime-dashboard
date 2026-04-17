import React from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import { useThemeStore } from "./store/useThemeStore";
import "./styles.css";

const App: React.FC = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;

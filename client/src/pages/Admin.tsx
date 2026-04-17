import React from "react";
import { useAuth } from "../hooks/useAuth";
import Card from "../components/ui/Card";

const Admin: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <p style={{ padding: 20 }}>You must be logged in to view this page.</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <Card title="Admin Panel">
        <p>Welcome, {user.username}.</p>
        <p>You can add admin-only features here.</p>

        <button
          onClick={logout}
          style={{
            marginTop: 12,
            padding: "8px 14px",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </Card>
    </div>
  );
};

export default Admin;

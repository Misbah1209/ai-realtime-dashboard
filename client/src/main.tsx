import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useWebSocket } from "./hooks/useWebSocket";

const queryClient = new QueryClient();

const Root: React.FC = () => {
  // Connect to WebSocket server
  useWebSocket("wss://ai-dashboard-backend-amsk.onrender.com");

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

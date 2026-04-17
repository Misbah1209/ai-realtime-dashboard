const express = require("express");
const cors = require("cors");
const http = require("http");
const WebSocket = require("ws");

const metricsRoutes = require("./routes/metrics");
const aiRoutes = require("./routes/ai");

const app = express();
app.use(cors());
app.use(express.json());

// REST API routes
app.use("/api/metrics", metricsRoutes);
app.use("/api/ai", aiRoutes);

// Create HTTP server
const server = http.createServer(app);

// WebSocket server
const wss = new WebSocket.Server({ server });

let clients = [];

// Handle WebSocket connections
wss.on("connection", (ws) => {
  clients.push(ws);

  ws.on("close", () => {
    clients = clients.filter((c) => c !== ws);
  });
});

// Broadcast random metrics every 2 seconds
function broadcastMetrics() {
  const data = {
    timestamp: new Date().toISOString(),
    cpu: +(Math.random() * 100).toFixed(2),
    usersOnline: Math.floor(Math.random() * 5000),
    sales: Math.floor(Math.random() * 10000),
    errors: Math.floor(Math.random() * 50),
  };

  const payload = JSON.stringify(data);

  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

setInterval(broadcastMetrics, 2000);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

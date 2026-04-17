const WebSocket = require("ws");

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  let clients = [];

  wss.on("connection", (ws) => {
    clients.push(ws);

    ws.on("close", () => {
      clients = clients.filter((c) => c !== ws);
    });
  });

  function broadcast(data) {
    const payload = JSON.stringify(data);
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(payload);
      }
    });
  }

  return { broadcast };
};

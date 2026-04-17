# AI‑Powered Real‑Time Analytics Dashboard

A high‑performance real‑time analytics dashboard built with **React, TypeScript, Zustand, React Query, Recharts, Node.js, Express, and WebSockets**.  
It streams live metrics, visualizes system performance, and generates AI‑style insights based on recent activity.

This project is designed to demonstrate **advanced React architecture**, **real‑time systems**, **state management mastery**, and **full‑stack engineering skills**.

---

## 🚀 Features

### 🔴 Real‑Time Data Streaming
- Live metrics pushed from a Node.js WebSocket server  
- Sub‑second updates for CPU, users online, sales, and error rates  
- Smooth UI rendering with memoization + virtualization  

### ⚛️ Advanced React Architecture
- Zustand for UI state  
- React Query for server state + caching  
- Custom hooks for WebSocket connections  
- Feature‑based folder structure  
- Dark/Light theme with global state  

### 📊 Interactive Visualizations
- CPU line chart  
- Users vs Sales bar chart  
- Error heatmap  
- Latest snapshot panel  
- Responsive layout using Recharts  

### 🤖 AI‑Style Insights
- Backend endpoint analyzes recent metrics  
- Generates human‑readable summaries  
- Flags anomalies (high CPU, elevated errors, strong sales, etc.)

### 🔐 Clean Backend
- Node.js + Express REST API  
- WebSocket server broadcasting metrics  
- Modular controllers + routes  
- Ready for JWT auth expansion  

---

## 🏗 Tech Stack

### Frontend
- React (TypeScript)
- Zustand
- React Query
- Recharts
- Custom Hooks
- CSS Modules

### Backend
- Node.js
- Express
- WebSocket (ws)
- CORS

---

## Running the Project

### Server
cd server
npm install
node index.js

### Client
cd client
npm install
npm start

# 🧬 Poke-Dex Plus Frontend

Welcome to the **Poke-Dex Plus Frontend**, a Vue.js application built with **Vue 3** and **Vite** that simulates the functionality and appearance of a Pokédex.

This frontend connects to the **Poke-Dex Plus API** to provide the following features:

- 🔍 Search and display Pokémon.
- 📝 Register and log in users.
- 🐾 View Pokémon evolutionary chains (for logged-in users).
- 🛠️ Admin role functionality to view API access logs.
- 🌐 Continuous API status monitoring to ensure the backend is available via the `/actuator/health` endpoint.

---

## 🚀 Features

- 💡 Simulates a real Pokédex, both in terms of functionality and appearance.
- 🔐 User authentication with JWT (login and registration).
- 👥 Role management (Trainer and Admin).
- 🧬 View evolutionary chains of Pokémon.
- 📝 Admins can access API logs.
- 🌐 Real-time backend status monitor showing whether the API is up or down.

---

## 🛠️ Technologies

- Vue 3
- Vite
- Vue Router
- Vuex
- Axios
- Bootstrap
- JWT Authentication

---

## 📚 Endpoints

### 🔐 Authentication

| Method | Route            | Description          |
| ------ | ---------------- | -------------------- |
| POST   | `/auth/login`    | Log in (returns JWT) |
| POST   | `/auth/register` | Register a new user  |

### 🧪 Pokédex

| Method | Route                             | Description                               |
| ------ | --------------------------------- | ----------------------------------------- |
| GET    | `/pokedex/{id}`                   | Get Pokémon (fetched from the API if new) |
| GET    | `/pokedex/without-evolution/{id}` | Get Pokémon without its evolution chain   |

### 🔐 Admin

| Method | Route              | Required Role |
| ------ | ------------------ | ------------- |
| GET    | `/api/access-logs` | `ADMIN`       |

---

## 🩺 Health Check

- Backend Health Check: [http://localhost:8080/actuator/health](http://localhost:8080/actuator/health)

---

## ⚙️ Installation and Setup

### Prerequisites

- Node.js (version 16+ recommended)
- npm or yarn (for managing dependencies)

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/poke-dex-plus-frontend.git

   ```

2. Navigate to the project directory:

   ```bash
   cd poke-dex-plus-frontend

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Start the development server:

   ```bash
   npm run dev

   ```

5. Open the application in your browser.

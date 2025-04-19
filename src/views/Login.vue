<template>
  <section class="login">
    <div class="login-form pokedex-screen">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input
          v-model="username"
          placeholder="Username"
          required
          class="pokedex-input"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="pokedex-input"
        />
        <div class="row">
          <div class="cols-12">
            <button type="submit" class="pokedex-button">Login</button>
          </div>
        </div>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { login as loginUser } from "@/services/authService";

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();
const store = useStore();

const login = async () => {
  try {
    const response = await loginUser(username.value, password.value);
    const { token, username: loggedInUsername, role } = response.data;

    await store.dispatch("auth/saveToken", {
      token,
      username: loggedInUsername,
      role,
    });
    router.push("/");
  } catch (error) {
    console.error("Login error: ", error);
    if (error.response?.status === 401) {
      errorMessage.value = "Invalid username or password";
    } else {
      errorMessage.value = "Something went wrong";
    }
  }
};
</script>

<style scoped>
.login {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  max-width: 400px;
  margin: auto;
}
.pokedex-screen {
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 2rem;
  margin: 0;
  border: 4px inset #ccc;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.pokedex-input {
  text-align: center;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border: 2px solid #888;
  outline: none;
}
.pokedex-button {
  background-color: #222;
  color: white;
  padding: 0.8rem 1rem;
  margin-top: 0.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>

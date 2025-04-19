<template>
  <section class="register">
    <div class="register-form pokedex-screen">
      <h2>Register</h2>
      <form @submit.prevent="register">
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
        <div class="password-hints">
          <p :class="{ valid: passwordValid.minLength }">
            • At least 6 characters
          </p>
          <p :class="{ valid: passwordValid.hasLetter }">
            • Includes a letter (a-z or A-Z)
          </p>
          <p :class="{ valid: passwordValid.hasNumber }">
            • Includes a number (0-9)
          </p>
        </div>
        <button type="submit" class="pokedex-button">Register</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "@/services/axios"; // lo crearemos ahora
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

import { register as registerUser } from "@/services/authService.js";

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();
const store = useStore();

const register = async () => {
  if (!isPasswordValid(password.value)) {
    errorMessage.value =
      "Password must be at least 6 characters long and include letters and numbers.";
    return;
  }

  try {
    const token = await registerUser(username.value, password.value);
    await store.dispatch("auth/saveToken", token);
    router.push("/");
  } catch (error) {
    console.error("Register error: ", error);
    if (error.response && error.response.status === 409) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = "Something went wrong";
    }
  }
};

const isPasswordValid = (password) => {
  const minLength = password.length >= 6;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  return minLength && hasLetter && hasNumber;
};

const passwordValid = computed(() => {
  const pass = password.value;
  return {
    minLength: pass.length >= 6,
    hasLetter: /[a-zA-Z]/.test(pass),
    hasNumber: /\d/.test(pass),
  };
});
</script>

<style scoped>
.register {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-form {
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
  /* font-size: 2rem; */
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
.password-hints {
  font-size: 1.2rem;
  color: #666;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.password-hints p {
  margin: 0.2rem 0;
}

.password-hints p.valid {
  color: green;
  font-weight: bold;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>

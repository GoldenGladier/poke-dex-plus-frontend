<template>
  <nav
    class="navbar navbar-expand-lg sticky-header custom-navbar"
    :class="{ scrolled: isScrolled }"
    :ref="header"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Pokédex+</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active">Home</router-link>            
          </li>
          <template v-if="!isAuthenticated">
            <li class="nav-item">
              <router-link class="nav-link" to="/auth/register" active-class="active">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/auth/login" active-class="active">Login</router-link>            
            </li>          
          </template>
          <template v-else>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout">Log out</a>
            </li>
          </template>          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref, onMounted, onBeforeUnmount } from "vue";

const store = useStore();
const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const logout = () => {
  store.dispatch('auth/logout');
  router.push('/');
};
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: transparent;
}

.sticky-header.scrolled {
  background-color: #f75a5a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.custom-navbar {
  background-color: #f75a5a;
  padding-left: 2rem;
  padding-right: 2rem;
}
.custom-navbar .navbar-brand {
  font-size: 2.2rem !important;
  color: #ffffff !important;
  padding: 0;
}
.custom-navbar .navbar-nav .nav-item .nav-link {
  color: #ffffff !important;
  position: relative;
  text-decoration: none;
}
.nav-link:hover {
  text-decoration: none !important;
}
.nav-link:hover::after {
  opacity: 1;
}
.nav-link.active::after {
  opacity: 1;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 6%;
  bottom: 10px;
  height: 3px;
  width: 90%;
  background-image: repeating-linear-gradient(
    to right,
    white,
    white 4px,
    transparent 4px,
    transparent 8px
  );
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.6);
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.nav-link:hover {
  text-decoration: underline;
}
</style>

<template>
  <section class="custom-banner">
    <div class="info">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-8 pt-sm-0 pb-4 pt-md-5 text">
            <div class="max-w-3xl mx-auto text-center">
              <h1 class="text-4xl font-bold mb-4">
                Welcome to <span class="text-red-500">Pokédex+</span>!
              </h1>
              <p class="text-lg mb-8">
                <strong>Your upgraded Pokémon partner app.</strong><br />
                Explore the world of Pokémon like never before! Just enter a
                Pokémon ID and instantly discover detailed information about
                your favorite creatures.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 pt-sm-5 pt-md-0">
            <img
              src="/img/Ash-PNG-Background.png"
              class="img"
              alt="description"
            />
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="">
      <path
        fill="#f75a5a"
        fill-opacity="1"
        d="M0,192L0,224L160,224L160,128L320,128L320,96L480,96L480,64L640,64L640,256L800,256L800,32L960,32L960,128L1120,128L1120,288L1280,288L1280,160L1440,160L1440,0L1280,0L1280,0L1120,0L1120,0L960,0L960,0L800,0L800,0L640,0L640,0L480,0L480,0L320,0L320,0L160,0L160,0L0,0L0,0Z"
      ></path>
    </svg>
  </section>
</template>

<script setup>
// No script logic needed for static banner
</script>

<style scoped>
.custom-banner {
  overflow: hidden;
  max-height: 100vh;
}
.custom-banner .info {
  padding: 0 10%;
  padding-top: 4rem;
  background: var(--custom-primary-background-color);
  color: var(--custom-primary-text-color);
}
.img {
  position: relative;
  z-index: 1;
  width: 60%;
  height: auto;
  filter: drop-shadow(0 0 10px #ffd63a) drop-shadow(0 0 20px #ffd63a)
    drop-shadow(0 0 30px #ffd63a);
  transition: transform 0.3s ease;
}

.img:hover {
  transform: scale(1.05); /* efecto suave al pasar el cursor */
}
</style>

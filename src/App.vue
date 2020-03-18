<template>
  <div id="app" :class="isDarkMode ? 'dark' : 'light'">
    <Header :class="isDarkMode ? 'dark' : 'light'" v-on:changeColorMode="changeColorMode" v-bind:isDarkMode="isDarkMode"/>
    <!-- <router-link to="/"/> -->
    <!-- <router-view/> -->
    <router-view isDarkMode="isDarkMode"></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    changeColorMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem("darkTheme", this.isDarkMode);
    }
  },
  data() { 
    return {
      isDarkMode: false,
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    padding-bottom: 100px;
  }

  .dark {
    background: #202d37;
    color: white;
  }

  .light {
    background: #fafafa;
    color: #111517;
  }

  .dark-element {
    background: #2b3945;
    color: white;
  }

  .light-element {
    background: white;
    color: #111517;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  body {
    margin: 0;
  }

  .component-padding {
    padding: 0 5%;
  }

  input, button {
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: white;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .style-chooser {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
  }

  .style-chooser .vs__dropdown-toggle {
    height: 50px;
    width: 170px;
  }

  .style-chooser .vs__selected-option {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }
</style>

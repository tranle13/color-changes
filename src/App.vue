<template>
  <div id="app" :class="isDarkMode ? 'dark' : 'light'">
    <Header :class="isDarkMode ? 'dark' : 'light'" v-on:changeColorMode="changeColorMode" v-bind:isDarkMode="isDarkMode"/>
    <router-view v-bind="isDark"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },
  methods: {
    changeColorMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.style.setProperty("--text-color", this.isDarkMode ? "white" : "#111517");
      document.documentElement.style.setProperty("--back-color", this.isDarkMode ? "#2b3945" : "white");
    }
  },
  data() { 
    return {
      isDarkMode: false,
    }
  },
  computed: {
    isDark() {
      return {isDark: this.isDarkMode}
    }
  }
}
</script>

<style>
  :root {
    --text-color: #111517;
    --back-color: white;
  }

  #app {
    font-family: "Nunito Sans", sans-serif;
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
    color: white !important;
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
    font-family: "Nunito Sans", sans-serif;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  .search-filter {
    padding: 5% 5%;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }

  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: var(--back-color);
    border: none;
    color: var(--text-color);
  }

  .style-chooser .vs__dropdown-menu li, .style-chooser .vs__selected {
    color: var(--text-color);
  }

  .style-chooser .vs__search {
    font-size: 1em;
    color: var(--text-color);
  }

  .style-chooser {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
  }

  .style-chooser .vs__dropdown-toggle {
    height: 50px;
    width: 190px;
  }

  .style-chooser .vs__selected-option {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: var(--text-color);
  }
</style>

<template>
  <div class="search-filter">
    <div class="search">
      <ion-icon name="search-outline"></ion-icon>
      <input type="text" placeholder="Search for a country...">
    </div>
    <div class="filter">
      <p>Filter by Region</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilter',
  components: {

  }
}
</script>

<style scoped>
  .search-filter {
    padding: 5% 5%;
  }

  .search {
    display: flex;
    align-items: center;
    padding: 20px 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  .search ion-icon {
    color: gray;
    --ionicon-stroke-width: 60px;
    font-size: 18px;
  }

  .search input {
    border: none;
    background: white;
    font-size: 14px;
    margin-left: 18px;
  }
</style>

<template>
  <div class="search-filter">
    <div class="search" v-if="!isDetail">
      <ion-icon name="search-outline"></ion-icon>
      <input type="text" placeholder="Search for a country...">
    </div>
    <div class="filter" v-if="!isDetail">
      <p>Filter by Region</p>
    </div>
    <div class="back-button" v-if="isDetail" @click="$emit('ctrDetail')">
      <ion-icon name="arrow-back-outline"></ion-icon> 
      <p>Back</p>           
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilter',
  props: [
    'isDetail'
  ]
}
</script>

<style scoped>
  .search-filter {
    padding: 5% 5%;
  }

  .search {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
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

  .back-button {
    box-shadow: 0 0 10px rgba(0,0,0,0.13);
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
  }

  .back-button p {
    margin-left: 8px;
  }

  .back-button ion-icon {
    font-size: 20px;
  }
</style>

<template>
    <div class="search-filter">
        <div :class="isDarkMode ? 'dark-element' : 'light-element'" class="back-button" @click="$router.go(-1)">
            <ion-icon name="arrow-back-outline"></ion-icon> 
            <p>Back</p>           
        </div>
    </div>
</template>

<script>
export default {
    name: "Back",
    props: [
        "isDarkMode"
    ]
}
</script>

<style scoped>
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
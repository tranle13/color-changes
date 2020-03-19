<template>
    <header class="header component-padding" :class="isDarkMode ? 'dark-element' : 'light-element'">
        <h2>Where in the world?</h2>
        <div class="dark-mode" @click="$emit('changeColorMode')">
            <ion-icon :name=changeIcon()></ion-icon> 
            <p>{{isDarkMode ? "Bright Mode" : "Dark Mode"}}</p>           
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: [
        "isDarkMode"
    ],
    methods: {
        changeIcon() {
            return this.isDarkMode ? "moon" : "moon-outline"
        }
    }

}
</script>

<style scoped>
    .header {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: space-between;
    }

    .dark-mode {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

    .dark-mode p {
        margin-left: 5px;
        font-weight: 600;
        font-size: 16px;
    }

    .dark-mode ion-icon {
        --ionicon-stroke-width: 50px;
    }
</style>
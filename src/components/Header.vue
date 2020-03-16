<template>
    <header class="header component-padding">
        <h3>Where in the world?</h3>
        <div class="dark-mode">
            <ion-icon name="moon-outline"></ion-icon> 
            <p>Dark Mode</p>           
        </div>
        <!-- <button class="dark-mode-btn">
            <ion-icon name="moon-outline"></ion-icon>
            Dark Mode
        </button> -->
    </header>
</template>

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
        font-size: 14px;
    }

    .dark-mode ion-icon {
        --ionicon-stroke-width: 50px;
    }

    /* .dark-mode-btn {
        border: none;
        background: none;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 13px;
        font-weight: 600;
    } */
</style>
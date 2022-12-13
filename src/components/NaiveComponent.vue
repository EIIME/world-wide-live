<template>
    <div class="logo-container">
        <img src="logo.png" alt="logo" class="logo" />
        <p class="description">This is a temporary description.</p>
        <div class="search-container">
            <input type="text" placeholder="Search" class="search-input" />
            <button class="search-button">Submit</button>
        </div>
    </div>
</template>

<style>
.logo-container {
    text-align: center;
}

.logo {
    display: block;
    margin: 0 auto;
}

.search-container {
    display: flex;
}

.search-input {
    flex: 1;
}
</style>
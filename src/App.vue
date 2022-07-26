<template>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader";
import TheResources from "./components/learning-resources/TheResources";

export default {
    name: 'App',
    components: {
        TheHeader,
        TheResources,

    },
    data() {
        return {};
    }
}
</script>

<style lang="scss">
// Global styles
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}



//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//  margin-top: 60px;
//}
</style>

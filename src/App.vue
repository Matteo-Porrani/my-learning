<template>
    <the-header title="RememberMe"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader";
import StoredResources from "./components/learning-resources/StoredResources.vue";

export default {
    name: 'App',
    components: {
        TheHeader,
        StoredResources,
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuesjs.org'

                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com'
                },
            ]
        };
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

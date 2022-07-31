<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
    <!--    How to pass different props, depending on which component is selected ? -->
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
    name: 'TheResources',
    components: {
        StoredResources,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resources',
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
            ],
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource,
        };
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: title,
                link: url,
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(id) {
            const targetIndex = this.storedResources.findIndex(res => {
                return res.id === id;
            });
            this.storedResources.splice(targetIndex, 1);
        },
    }
}
</script>

<style scoped>

</style>


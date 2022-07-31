import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton";
import BaseDialog from "./components/UI/BaseDialog";

// createApp(App).use(store).mount('#app')
const app = createApp(App);

app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');

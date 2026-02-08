import { createApp } from 'vue';
import App from './App.vue';
import AppNav from './components/AppNav.vue';
import AppHeader from './components/AppHeader.vue';
import AppView from './components/AppView.vue';
import BookComponent from './components/BookComponent.vue';

const app = Vue.createApp(App);
app.component('AppNav', AppNav);
app.component('AppHeader', AppHeader);
app.component('AppView', AppView);
app.component('BookComponent', BookComponent);
app.mount('#app');

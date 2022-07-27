import { createApp } from 'vue';
import App from './App.vue';
import User from './User.vue';
import UnAmi from './components/UnAmi';
import NewAmi from './components/NewAmi';
import ActiveUser from './components/ActiveUser';
import UserData from './components/UserData';
// createApp(App).mount('#app')
//On peut aussi stocker l'appli dans une variable
const app = createApp(App);
const user = createApp(User)
app.component('un-ami',UnAmi);
app.component('new-ami',NewAmi);
user.component('active-user',ActiveUser);
user.component('user-data', UserData);

// app.mount('#app');
user.mount('#app');

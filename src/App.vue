<template>
  <nav v-if='user !== null'>
    {{ errorMsg }}
  </nav>
  <router-view />
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'App',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),
  },
  async created() {
    try {
      await this.fetchUser();
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (error) {
      this.errorMsg = error.message;
    }
  },
};
</script>

<style>
#app {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2F4F4F;
}

.log-form {
    box-shadow: var(--color-box-shadow-large);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 48px 32px;
    width: 50%;
    border-radius: 40px;
    background-color:#5F9EA0;
    margin:10% 22% 20% 22%;
    box-shadow: 0px 0px 12px#A9A9A9;
  }

  .input-user-form{
  width: -webkit-fill-available;
  background-color:white;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 100px;
  display: flex;
}

.log-button{
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  width: -webkit-fill-available;
  background-color: #5F9EA0;
  color: white;
  cursor: pointer;
}
.log-button:hover {
  background-color:  #3cb371;
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

p {
color: red;
font-size: 10px;
}
</style>

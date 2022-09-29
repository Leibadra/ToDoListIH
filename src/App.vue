<template>
  <nav v-if='user !== null'>
    <router-link to='/'>Home</router-link>
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
      console.log(this.user);
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2F4F4F;
}

body {
  background-color: #2B2929;
}

.log-form {
    box-shadow: var(--color-box-shadow-large);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 48px 32px;
    width: 50%;
    border-radius: 40px;
    background-color: #f2f2f2;
    margin:10% 22% 20% 22%;
    box-shadow: 0px 0px 10px #f2f2f2;
  }

  .input-user-form{
  width: -webkit-fill-available;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 100px;
  box-shadow: 0px 0px 10px grey;
  display: flex;
}

.log-button{
  background-color: #FF8C00;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  width: -webkit-fill-available;
}
.log-button:hover {
  background-color: #8B008B;
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>

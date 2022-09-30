<template>
  <div>
    <p>{{ errorMsg }}</p>
    <button class="sign-out" type='submit' @click='handleSignOut'>Sign Out</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'Sign-out',
  data() {
    return {
      errorMsg: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    async handleSignOut() {
      try {
        await this.signOut();
        this.$router.push({ path: '/auth' });
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
  },
};
</script>

<style>
.sign-out{
  background-color:white;
  color:  #8FBC8F;
  padding: 8px 14px;
  margin: 8px 0;
  border: 1.5px solid #8FBC8F;
  border-radius: 100px;
  cursor: pointer;
  font-weight:700;
}
.sign-out:hover{
  background-color: #3CB371;
}
</style>

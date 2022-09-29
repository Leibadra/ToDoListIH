<template>
  <div>
    <h2>Sign Out</h2>
    <p>{{ errorMsg }}</p>
    <button type='submit' @click='handleSignOut'>Sign Out</button>
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

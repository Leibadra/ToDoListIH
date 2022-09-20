<template>
  <div>
    <h2>Sign Out</h2>
    <button type='submit' @click='handleSignOut'>Sign Out</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'Sign-out',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    handleSignOut() {
      this.signOut();
      this.$router.push({ path: '/auth' });
    },
  },
};
</script>

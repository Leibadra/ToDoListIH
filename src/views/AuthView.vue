<template>
<SignIn />
</template>

<script>
import SignIn from '@/components/SignIn.vue';
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push({ path: '/' });
      }
    },
  },
  components: { SignIn },
};
</script>

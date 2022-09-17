<template>
  <div>
    <h2>Sign In</h2>
    <form @submit.prevent='handleSignIn'>
      <div>
        <label for='email'
          >Email
          <input
            v-model='email'
            type='email'
            placeholder='Enter Email'
            name='email'
          />
        </label>
      </div>
      <div>
        <label for='password'
          >Password
          <input
            v-model='password'
            type='password'
            id='password'
            placeholder='Enter password'
            name='password'
          />
        </label>
      </div>
      <div>
        <button type='submit' @click='handleSignIn'>Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView.vue',
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
    handleSignIn() {
      const userData = {
        email: this.email,
        Password: this.password,
      };
      this.signIn(userData.email, userData.password);
    },
  },
};
</script>

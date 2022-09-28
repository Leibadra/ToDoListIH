<template>
  <div>
    <h2>Sign In</h2>
    <p>{{ errorMsg }}</p>
    <form>
      <div>
        <label for='email'
          >Email
          <input id='email' type='email' placeholder='email' v-model='email' />
        </label>
      </div>
      <div>
        <label for='password'
          >Password
          <input
            id='password'
            placeholder='password'
            type='password'
            v-model='password'
          />
        </label>
      </div>
      <div>
        <button type='button' @click='handleSignIn'>Sign In</button>
        <router-link to='/signup'
          >Dont have an account? Create it here</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    async handleSignIn() {
      try {
        await this.signIn(this.email, this.password);
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
  },
};
</script>

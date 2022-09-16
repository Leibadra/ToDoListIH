<template>
  <div>
    <h2>Entra tu mail y contraseña para ingresar</h2>
    <form @submit.prevent='handleSignUp'>
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
        <label for='confirmPassword'
          >Confirm Password
          <input
            v-model='confirmPassword'
            type='password'
            id='confirmPassword'
            placeholder='Confirm password'
            name='confirmPassword'
            required
          />
        </label>
      </div>
      <div>
        <button type='submit' @click='handleSignUp'>Sign Up</button>
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
      confirmPassword: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signOut', 'signIn']),
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        console.log('las contrasenas no coinciden');
        return;
      }
      const userData = {
        email: this.email,
        Password: this.password,
      };
      this.signUp(userData.email, userData.password);
    },
    handleSignIn() {
      const userData = {
        email: this.email,
        Password: this.password,
      };
      this.signIn(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

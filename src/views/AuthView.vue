<template>
  <div>
    <h2>Entra tu mail y contraseña para ingresar</h2>
    <form @submit.prevent='handleSignUp'>
      <div>
        <label for='email'>Email
        <input
          v-model='Email'
          type='text'
          placeholder='Enter Email'
          name='email'
          required
        />
        </label>
      </div>
      <div>
        <label for='password'>Password
        <input
          v-model='PasswordValue'
          type='password'
          placeholder='Enter password'
          name='password'
          required
        />
        </label>
      </div>
      <div>
        <button type='submit' @click='handleSignUp'>Sign Up</button>
        <span id='emailID' ref='1' style='display: none'>
          {{ EmailValue }}
        </span>
        <span id='passwordID' ref='2' style='display: none'>
          {{ PasswordValue }}
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'Login-vue',
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
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const userData = {
        emailValue: '',
        PasswordValue: '',
      };
      this.signUp(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

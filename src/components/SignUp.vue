<template>
    <div>
        <h2>Sign Up</h2>
        <p>{{ errorMsg }}</p>
        <form class="log-form">
                   <div>
                <label for='email'>Email
                    <input class="input-user-form" id='email'
                    type='email'
                    placeholder='email'
                    v-model='email'
                    />
                </label>
            </div>
            <div>
                <label for='password'>Password
                    <input class="input-user-form" id='password'
                    placeholder='password'
                    type='password'
                    v-model='password'
                    />
                </label>
            </div>
            <div>
                <label for='confirmPassword'>Confirm Password
                    <input class="input-user-form" id='confirmPassword'
                    placeholder='Confirm Password'
                    type='password'
                    v-model='confirmPassword' />
                </label>
            </div>
            <button class="log-button" type='button' @click='handleSignUp'>Sign Up</button>
        </form>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'sign-up',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    async handleSignUp() {
      if (this.password !== this.confirmPassword) {
        this.errorMsg = 'Passwords do not match';
        return;
      }
      const userData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.signUp(userData.email, userData.password);
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
  },
};
</script>

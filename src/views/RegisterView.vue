<!-- Testing comments, this will work too
Fuente: https://www.iteramos.com/pregunta/88592/como-se-comenta-el-codigo-en-un-archivo-vuejs<template>
  <div>
    <h1>Register</h1>
    <div v-if='errorMsg'>
      <p>{{ errorMsg }}</p>
    </div>
    <form @submit.prevent='register'>
      <h1>Register</h1>
      <div>
        <label for='email'
          >Email <input type='text' required id='email' v-model='email'
        /></label>
      </div>
      <div>
        <label for='password'
          >Password
          <input type='password' required id='password' v-model='password' />
        </label>
      </div>
      <div>
        <label for='ConfirmPassword'
          >Confirm Password
          <input
            type='password'
            required
            id='confirmPassword'
            v-model='confirmPassword'
        /></label>
      </div>
      <button type='submit' duration-200>Register</button>
      <router-link :to='{ name: "Login" }'>Already have an account?</router-link>
      <span>Login</span>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { supabase } from '../supabase/index';

export default {
  name: 'register-view',
  setup() {
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);

    const register = async () => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
          router.push({ name: 'Login' });
        } catch (error) {
          errorMsg.value = error.message;
          setTimeout(() => {
            errorMsg.value = null;
          }, 5000);
        }
        return;
      }
      errorMsg.value = 'Error: Password do not match';
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    };

    return {
      email, password, confirmPassword, errorMsg, register,
    };
  },
};
</script>
-->

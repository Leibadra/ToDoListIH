<!--<template>
  <div>
    <h1>Login</h1>
    <div v-if='errorMsg'>
      <p>{{ errorMsg }}</p>
    </div>
    <form @submit.prevent='login'>
      <h1>Login</h1>
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
      <button type='submit' duration-200>Login</button>
      <router-link :to='{ name: "Register" }'>
        Don't have an account?</router-link>
      <span>Register</span>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { supabase } from '../supabase/index';

  name: 'login-view',
  setup(){
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);

    const login = async () => {
      try {
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        router.push({ name: 'Home' });
      } catch (error) {
        errorMsg.value = 'Error: Incorrect Password';
        setTimeout(() => {
          errorMsg.value = null;
        }, 5000);
      }
    };

    return {
      email,
      password,
      confirmPassword,
      errorMsg,
      login,
    };
  };
};
</script>

-->
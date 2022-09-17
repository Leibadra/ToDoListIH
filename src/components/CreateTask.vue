<template>
    <div>
      <h2>Sign In</h2>
      <form @submit.prevent='handleSignIn'>
        <div>
          <label for='task'
            >Task
            <input
              v-model='task'
              type='email'
              placeholder='Enter Task'
              name='task'
            />
          </label>
        </div>
      <button type='submit' @click='addTask'>Add Task</button>
        </div>
      </form>
    </div>
</template>
  
  <script>
  import { mapState, mapActions } from 'pinia';
  import taskStore from '@/store/task';
  
  export default {
    name: 'Task.vue',
    data() {
      return {
        Task: '',
      };
    },
    computed: {
      ...mapState(taskStore, ['task']),
    },
    methods: {
      ...mapActions(taskStore, ['task']),
      addTask() {
        const Data = {
          task: this.task,
        };
        this.task(Data.task);
      },
    },
  };
  </script>
  
<template>
<div>
    <h2>Tasks</h2>
    <form>
      <div>
        <label for='task'
          >New task
          <input id='task' type='text' placeholder='Add' v-model='titleTask' />
        </label>
      </div>
        <button type='button' @click='handleNewTask'>Add task</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id" :id="task.id">
        {{ task.title }}
        <button @click='handleDelete(task.id,index)'>Delete</button>
        <button @click='handleUpdate(task.id,index)'>Edit</button>
      </li>
    </ul>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import taskStore from '@/store/task';

export default {
  data() {
    return {
      titleTask: '',
      editedTask: null,
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['addTasks', 'deleteTask', 'updateTask']),
    handleNewTask() {
      const newTask = {
        title: this.titleTask,
        user_id: this.user.id,
      };
      this.addTasks(newTask);
    },
    handleDelete(id, index) {
      this.deleteTask(id, index);
    },
    handleUpdate(id, index) {
      this.updateTask(id, index);
    },
  },
};
</script>

<template>
<div>
    <h2>Tasks</h2>
    <p>{{ errorMsg }}</p>
    <form>
      <div v-if="!isEditing">
        <label for='task'
          >New task
          <input id='task' type='text' placeholder='Add' v-model='titleTask' />
        </label>
        <button type='button' @click='handleNewTask'>Add task</button>
      </div>
      <div v-else>
        <label for='task'
        >New task
          <input id='task' type='text' placeholder='Add task' v-model='titleTask' />
        </label>
        <button type='button' @click='handleUpdate(taskId, taskIndex, titleTask)'>Update</button>
      </div>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id" :id="task.id">
        {{ task.title }}
        <label for='is_complete'>Task completed
        <input type='checkbox' id ='checkbox' v-model='is_complete' />
        </label>
        <button @click='handleDelete(task.id,index)'>Delete</button>
        <button @click='editTodo(task.title,index,task.id) '>Edit</button>
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
      isEditing: false,
      selectedIndex: null,
      taskId: '',
      taskIndex: '',
      errorMsg: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['addTasks', 'deleteTask', 'updateTask']),
    async handleNewTask() {
      const newTask = {
        title: this.titleTask,
        user_id: this.user.id,
      };
      try {
        await this.addTasks(newTask);
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
    async handleDelete(id, index) {
      try {
        await this.deleteTask(id, index);
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
    editTodo(titleTask, index, taskId) {
      this.titleTask = titleTask;
      this.selectedIndex = index;
      this.isEditing = true;
      this.taskId = taskId;
      this.taskIndex = index;
    },
    async handleUpdate(id, taskindex, title) {
      try {
        await this.updateTask(id, taskindex, title);
        this.isEditing = false;
        this.taskIndex = 'Add task';
        this.selectedIndex = null;
        this.titleTask = '';
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
  },
};
</script>

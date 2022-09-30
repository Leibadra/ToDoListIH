<template>
  <div class='task-list'>
    <form>
      <p>{{ errorMsg }}</p>
      <p>{{ errorMsgTwo }}</p>
      <h3>Create to do</h3>
      <div class='create-todo' v-if='!isEditing'>
        <label for='task'>
          <input class='input-tasks' id='task' type='text' placeholder='Add' v-model='titleTask' />
        </label>
        <button class='add-todo-button' type='button' @click='handleNewTask'>Add task</button>
      </div>
      <div v-else>
        <label for='task'>
          <input
            class='input-tasks'
            id='task'
            type='text'
            placeholder='Add task'
            v-model='titleTask'
          />
        </label>
        <button
          class='add-todo-button'
          type='button'
          @click='handleUpdate(taskId, taskIndex, titleTask)'
        >
          Update
        </button>
      </div>
    </form>
    <h3>To do list</h3>
    <div class='todo-list'>
      <div v-for='(task, index) in tasks' :key='task.id' :id='task.id'>
        <div class='todo-content'>
          <div>
            {{ task.title }}
            <label for='is_complete'>
              <input class='checkbox' type='checkbox' id='checkbox' v-model='is_complete' />
            </label>
          </div>
          <div>
            <button class='delete' @click='handleDelete(task.id, index)'>delete</button>
            <button class='edit' @click='editTodo(task.title, index, task.id)'>edit</button>
          </div>
        </div>
      </div>
    </div>
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
      errorMsgTwo: '',
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
        this.titleTask = '';
      } catch (error) {
        this.errorMsgTwo = 'Please add a task, cant save an empty fied';
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
        this.selectedIndex = null;
        this.titleTask = '';
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
  },
};
</script>

<style>
ul.todo-item {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
  text-decoration: none;
  margin-right: 10%;
}

.add-todo-button {
  background-color: #8fbc8f;
  color: white;
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 0px 4px 4px 0px;
}

.input-tasks {
  padding: 6px;
}

.add-todo-button:hover {
  background-color: #3cb371;
}

.todo-list {
  display: flex;
  background-color: #FAEBD7;
  height: 20px;
  display: inline-table;
  border-radius: 16px;
  box-shadow: 0px 0px 4px grey;
  justify-content: space-around;
  flex-direction: row;
  max-width: max-content;
}

.edit {
  background-color: #8fbc8f;
  color: #fffaf0;
  padding: 15% 50% 15% 50%;
  border: none;
  border-radius: 100px;
  cursor: pointer;
}
.edit:hover {
  background-color: #3cb371;
}
.delete {
  background-color: #8fbc8f;
  color: #fffaf0;
  padding: 15% 38% 15% 38%;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 5%;
}
.delete:hover {
  background-color: #3cb371;
}
.checkbox {
  background-color: aqua;
  cursor: initial;
  border-radius: 100%;
  margin-top: 23%;
}

.todo-content {
  margin: 30px;
  display: flex;
  width: 70%;
  padding-left: -46px;
}
</style>

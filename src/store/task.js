import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },
    async addTasks(task) {
      const { data, error } = await supabase
        .from('tasks')
        .insert(task);
      if (error) throw error;
      else this.tasks.push(data[0]);
    },
    async deleteTask(id, taskindex) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .match({ id });
      if (error) throw error;
      this.tasks.splice(taskindex, 1);
    },
    async updateTask(id, taskindex, title, isComplete) {
      const { error, data } = await supabase
        .from('tasks')
        .update({ title, isComplete })
        .match({ id });
      if (error) throw error;
      this.tasks[taskindex].title = data[0].title;
      this.tasks[taskindex].isComplete = data[0].isComplete;
    },
  },
});

<template>
  <div class='home'>
    <h1>Esta es la vista de home</h1>
    <AddTasks />
    <SignOut />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import AddTasks from '@/components/AddTasks.vue';
import SignOut from '@/components/SignOut.vue';

export default {
  name: 'HomeView',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
  },
  created() {
    this.fetchTasks();
  },
  components: { SignOut, AddTasks },
};
</script>

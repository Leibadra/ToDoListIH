<template>
  <div class='home'>
    <h1>Hi {{ user }}</h1>
    <UseTasks />
    <SignOut />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import UseTasks from '@/components/UseTasks.vue';
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
  components: { SignOut, UseTasks },
};
</script>

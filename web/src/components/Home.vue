<template>
    <div class="home">
      <h2>Home</h2>
      <p>Welcome, {{ user.name }}</p>
      <p>Balance: {{ user.balance }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['fetchUser']),
      async logout() {
        // Implement logout logic
        this.$router.push('/');
      }
    },
    created() {
      this.fetchUser();
    }
  };
  </script>
  
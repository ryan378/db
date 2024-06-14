<template>
    <div class="mutasi">
      <h2>Transaction History</h2>
      <input type="date" v-model="startDate" />
      <input type="date" v-model="endDate" />
      <button @click="fetchTransactions">Filter</button>
      <ul>
        <li v-for="transaction in transactions" :key="transaction.id">
          {{ transaction.transaction_date }} - {{ transaction.amount }} - {{ transaction.transaction_type }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        startDate: '',
        endDate: ''
      };
    },
    computed: {
      ...mapState(['transactions'])
    },
    methods: {
      ...mapActions(['fetchTransactions']),
      fetchTransactions() {
        // Call API with date range filter
        this.fetchTransactions();
      }
    },
    created() {
      this.fetchTransactions();
    }
  };
  </script>
  
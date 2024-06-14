<template>
    <div class="transfer">
      <h2>Transfer</h2>
      <select v-model="selectedBank">
        <option v-for="bank in banks" :key="bank.id" :value="bank.id">
          {{ bank.name }}
        </option>
      </select>
      <input type="text" v-model="targetAccount" placeholder="Target Account" />
      <button @click="checkAccount">Check</button>
      <p v-if="accountName">{{ accountName }}</p>
      <input type="number" v-model="amount" placeholder="Amount" />
      <button @click="transfer">Transfer</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        selectedBank: '',
        targetAccount: '',
        accountName: '',
        amount: 0
      };
    },
    computed: {
      ...mapState(['banks'])
    },
    methods: {
      ...mapActions(['fetchBanks', 'transfer']),
      async checkAccount() {
        // Call API to check account
      },
      async transfer() {
        if (this.amount < 10000) {
          alert('Minimum transfer amount is 10,000');
          return;
        }
        // Call API to perform transfer
        const result = await this.transfer({ bank_id: this.selectedBank, account_id: this.targetAccount, amount: this.amount });
        if (result.success) {
          alert('Transfer successful');
        } else {
          alert('Transfer failed');
        }
      }
    },
    created() {
      this.fetchBanks();
    }
  };
  </script>
  
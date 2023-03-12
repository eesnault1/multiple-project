<template>
    <li
      class="calendar-day"
      @click.self="askToAddEvent()"
      
    >
      <span >{{numero}}</span>
      <TheOverlay
        v-if="isAskToAdd"
        message="Voulez-vous vraiment ajouter une note pour ce jour ?"
        @close="isAskToAdd=false"
        @confirm="confirmAddEvent()"
      />
    </li>

  </template>
  
  <script setup>
  import TheOverlay from '../TheOverlay.vue';
  import { defineProps, ref } from 'vue';


  let isAskToAdd = ref(false)

  const askToAddEvent = () => {
    isAskToAdd.value = true
  }

  const confirmAddEvent = () => {

    isAskToAdd.value = false
  }


  defineProps(["numero"])


  
  </script>
  
  <style scoped>


  .calendar-day {
    list-style: none;
    position: relative;
    min-height: 100px;
    font-size: 16px;
    color : grey;
    border : 1px solid rgb(230, 146, 10);
    padding: 5px;
  }
  
  .calendar-day > span {
    position: absolute;
    right: 5px;
  }
  



  </style>
  
<template>
    <li
      class="calendar-day"
    >
      <span>{{numero}}</span>
    </li>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';

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
  
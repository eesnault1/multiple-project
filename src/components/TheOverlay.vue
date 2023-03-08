<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="overlay__container">
      <p>{{ props.message }}</p>
      <div class="overlay__buton">
        <button
          @click="$emit('confirm')"
        >
            Oui
        </button>
        <button
          @click="$emit('close')"
        >
            Non
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineEmits(['close', 'confirm' ])
const props = defineProps(['message'])
</script>

<style scoped>

.overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay__container {
  background-color: white;
  border : 1px solid rgb(230, 146, 10) ;
  padding: 30px;
  border-radius: 5px;
}


.overlay__buton {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}

.overlay__buton > button {
  padding: 10px 20px;
  background-color: rgba(230, 146, 10, 0.491);
  border : 1px solid rgb(230, 146, 10);
}

.overlay__buton > button:hover {
  padding: 10px 20px;
  color : white;
  background-color: rgb(230, 146, 10);
  border : 1px solid rgb(230, 146, 10);
}
</style>

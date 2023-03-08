<template>
      <div class="list-todo__item">
        <input
          class="list-todo__input"
          type="checkbox"
          v-model="isCheck"
        >

        <span
          class="list-todo__title"
          :class="isCheck ?'complete' : '' "
        >
          {{props.title}}
        </span>

        <font-awesome-icon
          class="list-todo__trash"
          icon="fa-solid fa-trash"
          @click="$emit('delete', props.title)"
        />
      </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';

defineEmits(['delete'])

const props = defineProps(['title'])
let isCheck = ref()

</script>

<style>
    
.list-todo{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
}

.list-todo__item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border : 1px solid rgb(230, 146, 10);
  padding: 20px 20px;
}

.list-todo__title {
  flex : 1;
  margin-left: 20px;
}

.complete {
    text-decoration: line-through;
}

.list-todo__trash:hover {
    cursor: pointer;
    color: rgba(219, 24, 24, 0.902);
}


</style>
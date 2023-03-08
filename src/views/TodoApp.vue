<template>

  <div class="container">
    <div class="header-todo">
      <h1 class="header-todo__title"> Todo List </h1>
      <div class="header__compteur">
        <p v-if="listOfTask.length < 2"> Nombre de tâche : <span>{{ listOfTask.length }} </span></p>
        <p v-else> Nombre de tâches : <span>{{ listOfTask.length }} </span></p>
      </div>
    </div>
    <div class="create-todo">
      <div class="create-todo__add">
        <input
          class="create-todo__input"
          type="text"
          placeholder="Ajouter une nouvelle tâche..."
          v-model="newTask"
        >
        <button
          class="create-todo__button"
          @click="addTodo()"
        >
          Ajouter
        </button>
      </div>
    </div>
    <div
      class="list-todo"
      v-for="task in listOfTask"
      :key="task"
    >
      <TodoItem
        :title="task"
        @delete="askDeleteItem($event)"
      />
    </div>
  </div>
  <TheOverlay
    v-if="isDelete"
    message="Voulez-vous vraiment supprimer cette todo ?"
    @close="isDelete=false"
    @confirm = "confirmDeleteItem($event)"
  />
</template>

<script setup>
/* Import des components */
import TodoItem from '@/components/todoView/TodoItem.vue'
import TheOverlay from '@/components/TheOverlay.vue'

/* Import autres */
import { ref } from 'vue';


/* Déclaration variable */
let newTask = ref("")
let listOfTask = ref([])
let isDelete = ref(false)
let todoID = ref()

/* Ajout d'une tâche à la todo list */
const addTodo = () => {
  if(listOfTask.value.includes(newTask.value)){
    alert('une tâche semblable existe déjà')
  } else {
    listOfTask.value.push(newTask.value)
    newTask.value = ""
  }
}

/* Demande pour suppression de la tâche (overlay component) */
const askDeleteItem = (event) => {
  isDelete.value = true
  todoID.value=event
}

/* Confirmation suppression de la tâche (overlay component) */
const confirmDeleteItem = () => {
  let index = listOfTask.value.indexOf(todoID.value)
  listOfTask.value.splice(index,1)
  isDelete.value = false
}
</script>

<style>

.container {
  width : 80%;
  margin : 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
}

.header-todo {
  width : 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-todo__title{
  font-size: 2rem;
  font-weight: 600;
}

.header__compteur {
  display: flex;
  gap : 1rem;
  font-weight: 600;
  font-size: 16ox;
}

.create-todo {
  width : 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

}

.create-todo__add {
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 2rem;
}

.create-todo__input{
  width : 400px;
  padding: 10px 20px;
  outline: none;
  border : 1px solid rgb(230, 146, 10);
  color : rgb(230, 146, 10);
}


.create-todo__input::placeholder{
  color : rgb(91, 91, 91);
}


.create-todo__button {
  padding: 10px 20px;
  border : 1px solid rgb(230, 146, 10);
  background-color: rgba(230, 146, 10, 0.388);
}

.create-todo__button:hover {
  background-color: rgba(230, 146, 10, 0.872);
  color: white;
}


.create-todo__button:active {
  background-color: rgba(230, 146, 10, 0.388);
}

</style>
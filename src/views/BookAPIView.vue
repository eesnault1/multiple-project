<template>
    <div class="section-book">
        <div class="header-search">
            <h1 class="header-search__title"> Chercher un Livre </h1>
            <div class="header-search__search">
                <input
                  class="header-search__input"
                  type="text"
                  name="searchBook"
                  v-model="storeAPIBook.searchBook"
                  @keyup.enter="storeAPIBook.getBook"
                  placeholder="Auteur, titre, sujet, ..."
                />
                <button
                  class="header-search__btn"
                  @click="storeAPIBook.getBook"
                >
                    Chercher 
                </button>
            </div>
        </div>
        <TheSpinner v-if="storeAPIBook.isLoading"/>
        <div class="grid">
            <div v-for="book in storeAPIBook.bookArray" :key="book">
                <OneBook :book="book" />
            </div>
        </div>

    </div>
</template>

<script setup>
import TheSpinner from '@/components/TheSpinner.vue';
import OneBook from '@/components/bookView/OneBook.vue'
import {useAPIBook} from '@/stores/bookAPI'

const storeAPIBook = useAPIBook()




</script>


<style scoped>

body {
    background-color: rgb(249, 252, 255);

}

.section-book {
    padding: 60px 0px;

}


.header-search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom : 50px;
    gap : 50px;
}

.header-search__title {
    font-size: 3rem;
    color : rgb(230, 146, 10);
}

.header-search__search {
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 5px;
    border : 1px solid rgb(230, 146, 10);
}

.header-search__input {
    width: 270px;
    outline: none;
    color : rgb(230, 146, 10);
    padding : 8px 15px;
}

.header-search__input:placeholder-shown {
    color : rgb(109, 109, 109);
}

.header-search__btn {
    padding: 8px 15px;
    background-color: rgba(230, 146, 10, 0.363);
}

.header-search__btn:hover {
    color : white;
    background-color: rgb(230, 146, 10);
}

.grid {
    width: 95%;
    margin : auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
}
</style>
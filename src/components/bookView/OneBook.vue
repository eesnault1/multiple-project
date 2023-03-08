<template>
    <div class="book" @click="askOpenBook(book.volumeInfo.infoLink)">
            <h2
              class="book__title"
              :title="book.volumeInfo.title"
            > 
                {{ book.volumeInfo.title }} 
            </h2>
            <div class="book-information">
                <img
                  v-if="book.volumeInfo.imageLinks"
                  class="book-information__img"
                  :src="book.volumeInfo.imageLinks.thumbnail"
                >
                <img
                  v-else
                  class="book-information__img"
                  src="@/assets/No_Image_Available.jpg"
                >
                <div class="book-information__information">
                    <div class="book-information__texte">
                        <span>Auteur : </span><span v-if="book.volumeInfo.authors">{{ book.volumeInfo.authors[0] }}</span>
                    </div>
                    <div class="book-information__texte">
                        <span>Edition : </span><span v-if="book.volumeInfo.publisher">{{ book.volumeInfo.publisher }}</span>
                    </div>
                    <div class="book-information__texte">
                        <span>Date : </span><span v-if="book.volumeInfo.publishedDate">{{ book.volumeInfo.publishedDate }}</span>
                    </div>
                </div>
            </div>
    </div>
    <TheOverlay
      v-if="isClose"
      @close="CloseAskOpenBook()"
      message="Voulez-vous en savoir plus sur ce livre ?"
      @confirm = "confirmOpenBook()"
    />
</template>

<script setup>
import { defineProps, ref } from 'vue';
import TheOverlay from '../TheOverlay.vue';
defineProps(['book'])

let isClose = ref(false)
let linkBookTemp = ref("")

const askOpenBook = (linkBook) => {
    isClose.value=true
    linkBookTemp.value = linkBook
}

const CloseAskOpenBook = () => {
    linkBookTemp.value = ""
    isClose.value=false
}

const confirmOpenBook = () => {
    window.open(linkBookTemp.value, '_blank')
    isClose.value=false

}

</script>

<style>
    .book {
        padding : 30px;
        background-color: rgba(230, 146, 10, 0.163);
        border : 1px solid rgb(230, 146, 10);
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap : 30px;
        cursor: pointer;
    }

    .book__title {
        text-overflow:ellipsis;
        overflow:hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .book-information {

        display: flex;
        justify-content: start;
        align-items: start;
        gap : 20px;
    }

    .book-information__img {
        height: 250px;
        object-fit: cover;
    }

    .book-information__information {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .book-information__texte {
        display: flex;
        justify-content: start;
        align-items: center;
        gap : 0.6rem;
    }

    .book-information__texte > :nth-child(1) {
        font-weight: 600;
    }

</style>
import { defineStore } from "pinia";
import axios from "axios";

export const useAPIBook = defineStore({
    id: 'APIBook',
    state: () => ({
        bookArray : [],
        searchBook : "",
        isLoading : false,
    }),
    actions: { 
        // Call API
        async bookAPI() {
            this.bookArray = []
            this.isLoading = true
            await axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchBook}&key=AIzaSyABCDlDEgYsEvprHOUtSc8v9YKsAy-B1MU`)
            .then(response => {
                this.bookArray = response.data.items
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                this.isLoading = false
            })
        },
        getBook() {
            this.bookAPI()
        }
    },
    getters: {
    }
})
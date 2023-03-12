<template>
    <div class="container">
        <div class="container__calendar">
            <div class="calendar-header">
                <span class="calendar-header__curent-date">
                    {{ nomMois }} {{ annee }}
                </span>
                <div class="calendar-header__switch-date">
                    <span @click="moisPrecedent()">
                        &lt;
                    </span>
                    <span>
                        {{ nomMois }}
                    </span>
                    <span @click="moisSuivant()">
                        >
                    </span>
                </div>
            </div>
            <div class="calendar-content">
                <ul class="calendar-content__semaines">
                    <li v-for="jour in joursSemaine" :key="jour">
                        {{ jour }}
                    </li>
                </ul>
                <div class="calendar-content__grid" >
                    <CalendarDay
                      class="calendar-content__inactive"
                      v-for="index in numeroJourDebutMois-1"
                      :key="index"
                      :numero="index"
                    />
                    <CalendarDay
                      v-for="index in dernierJour"
                      :key="index"
                      :style="{ gridColumnStart: index === 1 ? numeroJourDebutMois : 'auto'}"
                      :numero="index"
                    />
                    <CalendarDay
                      class="calendar-content__inactive"
                      v-for="index in numeroJourMoisApres()"
                      :key="index"
                      :numero="index"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import CalendarDay from'@/components/calendarView/CalendarDay.vue'
import { ref } from 'vue';

const joursSemaine = ref(["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"])


// Initialise la date pour le moment actuel 
const date = new Date()
let jour = date.getDate().toString().padStart(2, '0')
let mois = (date.getMonth() + 1).toString().padStart(2, '0')
let annee = date.getFullYear().toString()

let currentDate = ref()
let nomMois = ref()
let dernierJour = ref()
let dernierJourMoisPrecedent = ref()
let premierJourDuMois = ""
let numeroJourDebutMoisTemp = 0
let numeroJourDebutMois = ref()


const getCurrentDate = (annee, mois, jour) => {
    currentDate.value = new Date(`${annee}-${mois}-${jour}`)
    nomMois.value = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(currentDate.value)
    dernierJour.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate();
    dernierJourMoisPrecedent.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 0).getDate();
    // permet de savoir où débuter dans la grid
    premierJourDuMois = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
    numeroJourDebutMoisTemp = premierJourDuMois.getDay()
    if(numeroJourDebutMoisTemp === 0){
        numeroJourDebutMois.value = 7
    } else {
        numeroJourDebutMois.value = numeroJourDebutMoisTemp
    }
}

getCurrentDate(annee, mois, jour)


const moisPrecedent = () => {
    if(Number(mois) === 1) {
        mois = 12
        annee --
    } else {
        mois--
    }
    getCurrentDate(annee, mois, jour)
}

const moisSuivant = () => {
    if(Number(mois) === 12) {
        mois = 1
        annee ++
    } else {
        mois++
    }
    getCurrentDate(annee, mois, jour)
}

const numeroJourMoisApres = () => {
    return 42-(numeroJourDebutMois.value-1+dernierJour.value)
}



</script>


<style>


.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container__calendar {
    width: 100%;
    border : 1px solid rgb(230, 146, 10);
    padding : 10px;
}
    
.calendar-header {
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
} 

    
.calendar-header > :nth-child(1) {
    font-size: 2.5rem;
    font-weight: 600;
} 

    
.calendar-header__switch-date {
    display: flex;
    align-items: center;
    justify-content: center;
    gap : 8px;
    cursor: pointer;
    color : grey;
} 

.calendar-header__switch-date >:nth-child(2) {
    display: flex;
    justify-content: center;
    width: 100px;
} 

.calendar-content {
    margin-top : 30px;
}

.calendar-content__semaines {
    text-decoration: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.calendar-content__semaines > li{
    list-style : none;
    text-align : right;
    font-size: 1.3rem;
    color: rgb(230, 146, 10);
}

.calendar-content__grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
}

.calendar-content__inactive {
    background-color: rgb(215, 215, 215);
}
</style>
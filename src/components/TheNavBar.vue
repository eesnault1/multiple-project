<template>
    <nav class="navbar">
            <ul class="navbar__list">
                <li class="navbar__item">
                    <router-link to="/todoApp" class="navbar__link">Todo-app</router-link>
                </li>
                <li class="navbar__item">
                    <router-link to="/bookAPIView" class="navbar__link">Search-Book</router-link>
                </li>
            </ul>
    </nav>
</template>

<style>
.navbar {
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: rgb(74, 74, 74);
    padding: 30px;
}

.navbar__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 1.5rem;
    list-style: none;
}

.navbar__link{
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
}


.navbar__link:hover{
    color: rgb(230, 146, 10);
}

    
</style>
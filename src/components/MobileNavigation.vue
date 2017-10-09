<template>
    <aside class="menu">
        <p class="menu-label">
            Algemeen
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/aanmelden" class="navbar-item">Aanmelden</router-link>
            </li>
            <li>
                <router-link to="/spelregels" class="navbar-item">Spelregels</router-link>
            </li>
            <li>
                <router-link to="/statistieken" class="navbar-item">Statistieken</router-link>
            </li>
        </ul>
        <p class="menu-label">
            Administratie
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/gebruikers" class="navbar-item">Gebruikers</router-link>
            </li>
            <li>
                <router-link to="/maaltijden" class="navbar-item">Maaltijden</router-link>
            </li>
        </ul>
        <p class="menu-label">
            Gebruiker
        </p>
        <ul class="menu-list">
            <li v-if="loggedIn">
                <router-link to="/profiel" class="navbar-item">Profiel</router-link>
            </li>
            <li v-if="loggedIn" @click="logout">
                <a>Uitloggen</a>
            </li>
            <li v-if="!loggedIn" @click="login">
                <a>Inloggen</a>
            </li>
        </ul>
    </aside>
</template>

<script>
import OAuth from '../services/OAuth';

export default {
    data() {
        return {
            loggedIn: this.$store.getters.loggedIn,
        };
    },

    methods: {
        login() {
            OAuth.toAuthorizationFlow();
        },

        logout() {
            this.$store.commit('logout');
        },
    },
};
</script>

<style scoped>
    .menu   {
        width: 150px;
        position: absolute;
        right: 0;
        text-align: left;
        padding: 1em;
        background-color: #363636;
        z-index: 999;
    }

    a {
        padding-right: 0;
        color: white;
    }
</style>

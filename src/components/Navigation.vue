<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <h1>Bolknoms</h1>

            <button class="button navbar-burger is-dark" @click="toggleNavigation"
            :class="{'is-active': mobile}">
            <span /><span /><span />
        </button>
    </div>

    <div class="navbar-menu">
        <div class="navbar-start">
            <router-link to="/aanmelden" class="navbar-item">Aanmelden</router-link>
            <router-link to="/spelregels" class="navbar-item">Spelregels</router-link>
            <router-link to="/statistieken" class="navbar-item">Statistieken</router-link>

            <div href="#" class="navbar-item has-dropdown is-hoverable">
                <a href="#" class="navbar-link">Administratie</a>
                <div class="navbar-dropdown">
                    <router-link to="/gebruikers" class="navbar-item">Gebruikers</router-link>
                    <router-link to="/maaltijden" class="navbar-item">Maaltijden</router-link>
                </div>
            </div>
        </div>

        <div class="navbar-end" v-if="loggedIn">
            <div href="#" class="navbar-item has-dropdown is-hoverable">
                <a href="#" class="navbar-link">
                    <img :src="profilePhoto" alt="Wow, jij ziet er goed uit vandaag!" class="mugshot">
                </a>
                <div class="navbar-dropdown right-side">
                    <p class="menu-label">
                        Jonathan van der Wijk
                    </p>
                    <router-link to="/profiel" class="navbar-item">Mijn profiel</router-link>
                    <a href="#" class="navbar-item" @click.prevent="login">Uitloggen</a>
                </div>
            </div>
        </div>

        <div class="navbar-end" v-if="!loggedIn">
            <a href="#" class="navbar-item" title="Inloggen" @click.prevent="login">
                <i class="fa fa-sign-in" aria-hidden="true"></i> Inloggen
            </a>
        </div>
    </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex';
import OAuth from '../services/OAuth';

export default {

    props: ['showMobileNav'],

    data() {
        return { mobile: this.showMobileNav };
    },

    computed: {
        ...mapGetters(['loggedIn']),

        profilePhoto() {
            const uid = this.$store.state.oauth.user.username;
            const token = this.$store.state.oauth.token.access_token;
            return `https://people.debolk.nl/persons/${uid}/photo/128/128?access_token=${token}`;
        },
    },

    methods: {
        toggleNavigation() {
            this.mobile = !this.mobile;
            this.$emit('update:showMobileNav', this.mobile);
        },

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
h1 {
    display: inline;
    font-weight: bold;
    font-size: x-large;
    padding: 0.25em 1em 0 1em;
}
.is-active {
    padding-bottom: 3px;
    border-bottom: 3px solid #FF3333;
}
.navbar-dropdown {
    border-top-width: 0;
    padding-top: 0;
}
.navbar-end i.fa {
    margin-right: 0.5em;
}

.mugshot {
    border-radius: 50%;
}

.right-side {
    width: 200px;
    position: absolute;
    left: -120px;
    text-align: right;
    padding: 1em;
}
</style>

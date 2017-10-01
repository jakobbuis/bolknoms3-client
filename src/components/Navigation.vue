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
            <div class="navbar-end">
                <router-link to="/profiel" class="navbar-item">Photoding</router-link>
                <a href="#" class="navbar-item" title="Uitloggen">
                    <i class="fa fa-power-off" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['showMobileNav'],
    data() {
        return { mobile: this.showMobileNav };
    },

    methods: {
        toggleNavigation() {
            this.mobile = !this.mobile;
            this.$emit('update:showMobileNav', this.mobile);
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
</style>

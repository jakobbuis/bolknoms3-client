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
            <li>
                <router-link to="/profiel" class="navbar-item">Profiel</router-link>
            </li>
            <li>
                <a>Uitloggen</a>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
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
    }

    a {
        padding-right: 0;
        color: white;
    }
</style>

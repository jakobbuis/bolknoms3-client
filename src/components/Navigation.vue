<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <h1>Bolknoms</h1>

            <div class="navbar-burger">

            </div>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <a href="#" class="navbar-item">Aanmelden</a>
                <a href="#" class="navbar-item">Statistieken</a>
                <div href="#" class="navbar-item has-dropdown is-hoverable">
                    <a href="#" class="navbar-link">Administratie</a>
                    <div class="navbar-dropdown">
                        <a href="#" class="navbar-item">Gebruikers</a>
                        <a href="#" class="navbar-item">Maaltijden</a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <a href="#" class="navbar-item">User photo</a>
                <a href="#" class="navbar-item" title="Uitloggen">
                    <i class="fa fa-power-off" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
h1 {
    display: inline;
    font-weight: bold;
    font-size: x-large;
    padding: 0.25em 1em 0 1em;
}
</style>

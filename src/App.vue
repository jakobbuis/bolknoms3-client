<template>
  <div id="app">

    <Navigation :showMobileNav.sync="showMobileNav" ></Navigation>
    <MobileNavigation v-show="showMobileNav"></MobileNavigation>

    <main>
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';

export default {
    name: 'app',
    components: { Navigation, MobileNavigation },

    data() {
        return {
            showMobileNav: false,
        };
    },
};
</script>

<style lang="scss">
@import 'node_modules/bulma/bulma.sass';
</style>

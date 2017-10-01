<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
    name: 'app',
    components: { Navigation },
};
</script>

<style lang="scss">
@import 'node_modules/bulma/bulma.sass';
</style>

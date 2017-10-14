<template>
    <div>
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Jakob Buis
                    </h1>
                    <h2 class="subtitle">
                        Mijn profiel
                    </h2>
                </div>
            </div>
        </section>

        <img :src="photo" alt="">

        <div class="boxes">
            <div class="columns">
                <div class="column">
                    <Diet></Diet>
                </div>
                <div class="column">
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import User from '../services/User';
import Diet from './Diet';

export default {

    components: { Diet },

    computed: {
        photo() {
            return User.picture();
        },
    },

    mounted() {
        User.getDetails().then((response) => {
            this.$store.commit('userDetails', response.data.data);
        });
    },
};
</script>

<style scoped>
img {
    border-radius: 50%;
    position: absolute;
    top: 7em;
    right: 7em;
    width: 10em;
    height: 10em;
}

.boxes {
    margin: 2em;
}
</style>

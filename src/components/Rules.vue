<template>
    <main class="content">
        <h1>Spelregels</h1>
        <p>
            Voor het gebruik van Bolknoms en het mee-eten aan de eettafel gelden een paar spelregels.
        </p>
        <section v-for="category in categories">
            <h2>{{ category.title }}</h2>
            <ol>
                <li v-for="rule in category.rules">{{ rule }}</li>
            </ol>
        </section>
    </main>
</template>

<script>
import axios from 'axios';

export default{

    data() {
        return { categories: [] };
    },

    mounted() {
        axios.get('/rules').then((response) => {
            this.categories = response.data.data;
        });
    },
};
</script>

<style scoped>
h2 {
    font-size: large;
    font-weight: bold;
    margin-bottom: 0;
}

ol {
    margin-top: 0;
    margin-bottom: 1em;
}
</style>

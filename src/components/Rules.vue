<template>
    <main>
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Spelregels
                    </h1>
                    <h2 class="subtitle">
                        Voor het gebruik van Bolknoms en het mee-eten aan de eettafel gelden een paar spelregels.
                    </h2>
                </div>
            </div>
        </section>

        <section class="content" v-for="category in categories">
            <h2>{{ category.title }}</h2>
            <ol>
                <li v-for="rule in category.rules">{{ rule }}</li>
            </ol>
        </section>
    </main>
</template>

<script>
export default{

    data() {
        return { categories: [] };
    },

    created() {
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
.content {
    margin: 2em;
    max-width: 40em;
}
</style>

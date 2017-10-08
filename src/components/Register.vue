<template>
    <div>
        <h1>Aanmelden voor maaltijden</h1>
        <div class="columns" v-for="set in sets">
            <Meal v-for="meal in set" :key="meal.id" :meal="meal"></Meal>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import Meal from './Meal';

export default {

    components: { Meal },

    data() {
        return { sets: [] };
    },

    mounted() {
        axios.get('/meals/upcoming').then((response) => {
            this.sets = _.chunk(response.data.data, 2);
        });
    },
};
</script>

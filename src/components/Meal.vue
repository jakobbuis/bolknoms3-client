<template>
    <div class="column is-half">
        <div class="card">
            <div class="card-image">
                <figure class="image is-16by10">
                    <img src="http://via.placeholder.com/640x180" alt="Placeholder image">
                </figure>
            </div>

            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ date }}</p>
                        <p class="subtitle is-6">
                            <i class="fa fa-fw fa-clock-o"></i> {{ deadline }}
                            <i class="fa fa-fw fa-cutlery"></i> {{ time }}
                        </p>
                    </div>
                </div>

                <button class="button" @click="register">+</button>

                <div class="content">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/nl';

export default {

    props: ['meal'],

    computed: {
        date() {
            return moment(this.meal.meal_timestamp).format('dddd D MMMM');
        },

        deadline() {
            return `${moment(this.meal.meal_timestamp).format('HH:mm')} uur`;
        },

        time() {
            return `${moment(this.meal.registration_close).format('HH:mm')} uur`;
        },
    },

    methods: {
        register() {

        },
    },
};
</script>

<style scoped>
    button {
        width: 3em;
        height: 3em;
        position: absolute;
        top: 5.25em;
        right: 1em;
        border-radius: 50%;
    }
</style>

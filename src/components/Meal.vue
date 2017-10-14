<template>
    <div class="column is-half">
        <div class="box">
            <article class="media">

                <div class="media-content">
                    <div class="content">
                        <h2>{{ date }}</h2>
                        <button class="button">Aanmelden</button>
                        <p class="details">
                            <i class="fa fa-clock-o"></i> {{ deadline }} <br>
                            <i class="fa fa-cutlery"></i> {{ time }}
                        </p>
                    </div>
                </div>
            </article>
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
            return `Aanmelden tot ${moment(this.meal.meal_timestamp).format('HH:mm')} uur`;
        },

        time() {
            return `Eten om ${moment(this.meal.registration_close).format('HH:mm')} uur`;
        },
    },
};
</script>

<style scoped>
h2 {
    font-size: medium;
    font-weight: bold;
}
button {
    height: 2.5em;
    float: left;
}
.details {
    float: left;
    margin-left: 1em;
    font-size: small;
    color: #666;
}
</style>

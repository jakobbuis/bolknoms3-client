<template>
    <div class="column is-one-third">
        <div class="card">
            <div class="card-image">
                <figure class="image is-16by10">
                    <img src="http://via.placeholder.com/320x200" alt="Placeholder image">
                </figure>
            </div>

            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ date }}</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>

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
            return moment(this.meal_timestamp).format('dddd D MMMM');
        },
    },
};
</script>

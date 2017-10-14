<template>
    <div class="box">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <h3>Dieet</h3>


                    <div class="field">
                      <p class="control has-icons-right" :class="{'is-loading': state === 'saving'}">
                        <input type="text" class="input"
                               v-model="diet" placeholder="Je hebt geen dieet ingesteld"
                               @blur="save" @keyup="delayedSave">
                        <span class="icon is-small is-right" v-if="state === 'saved'">
                            <i class="fa fa-check"></i>
                        </span>
                  </p>
              </div>
          </div>
      </div>
  </article>
</div>
</template>

<script>
import User from '../services/User';

export default {

    data() {
        return {
            diet: this.$store.state.user.diet,
            saveTimer: null,
            state: 'neutral', // neutral -> saving -> saved
        };
    },

    methods: {
        // Save the new diet
        save() {
            // Clear the timer (useful if called directly to prevent saving twice)
            clearTimeout(this.saveTimer);

            // Don't do anything when there aren't any changes
            if (this.state === 'saved') {
                return;
            }

            // Update server
            this.state = 'saving';
            User.updateDetails({ diet: this.diet }).then(() => { this.state = 'saved'; });
        },

        // Save (on keyup) after a slight delay
        delayedSave() {
            this.state = 'neutral';
            clearTimeout(this.saveTimer);
            this.saveTimer = setTimeout(this.save, 1000);
        },

    },
};
</script>

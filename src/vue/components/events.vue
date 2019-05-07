<script>
    import dayWithEvents from './day-with-events'

    export default {
        name: 'events',
        components: {
            dayWithEvents
        },
        computed: {
            eventDays() {
                return this.$store.getters['getEventDays']();
            }
        }
    }
</script>


<template>
    <div class="events">
        <day-with-events
            v-for="(day, index) in eventDays"
            :key="index"
            :day="day"/>
    </div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .events {
        padding-top: 8px;

        @media (max-width: 768px) {
            width: 100%;
            padding: 20px 0;
        }
    }
</style>
<script>
    import event from './event'

    export default {
        name: 'events',
        components: {
            event
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
        <event
            v-for="(day, index) in eventDays"
            :key="index"
            :day="day"/>
    </div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .events {
        width: 450px;
        padding: 20px;
        min-height: 250px;

        @media (max-width: 768px) {
            width: 100%;
            padding: 20px 0;
        }
    }
</style>
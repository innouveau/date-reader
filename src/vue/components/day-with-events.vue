<script>
    import event from './event';

    export default {
        name: 'day-with-event',
        components: {
            event
        },
        props: {
            day: {
                type: Object,
                required: true
            }
        },
        computed: {
            date() {
                let month = this.$store.getters['getMonth'];
                return this.day.day + ' ' + month.monthName;
            }
        }
    }
</script>


<template>
    <div class="day-with-event">
        <div class="event__date">
            {{date}}
        </div>
        <event
            v-for="(event, index) in day.events"
            :key="index"
            :event="event"/>
    </div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .day-with-event {
        padding: 20px 0;
        border-bottom: 2px solid #BEBEBE;
        line-height: 1.625;

        .event__date {
            color: $mainColor;
            font-weight: 700;
        }
    }
</style>
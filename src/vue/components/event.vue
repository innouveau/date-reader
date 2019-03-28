<script>

    export default {
        name: 'event',
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
    <div class="event">
        <div class="event__date">
            {{date}}
        </div>
        <div class="event__title">
            {{day.event.title}}
        </div>
        <div class="event__description">
            {{day.event.description}} (...)
            <a :href="day.event.url" target="_blank">Lees verder</a>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .event {
        padding: 20px 0;
        border-bottom: 2px solid #BEBEBE;
        line-height: 1.625;

        .event__date {
            color: $mainColor;
            font-weight: 700;
        }

        .event__title {
            font-weight: 700;
        }

        .event__description {
            font-size: 16px;

            a {
                color: $mainColor;
            }
        }
    }
</style>
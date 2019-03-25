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
        padding: 0 20px 10px 20px;
        border-bottom: 1px solid $mainColor;
        margin-bottom: 10px;
        line-height: 1.3;

        .event__date {
            text-transform: uppercase;
            font-size: 11px;
        }

        .event__title {
            font-weight: 700;
            font-size: 17px;
            margin-bottom: 4px;
        }

        .event__description {

            a {
                color: #000;
            }
        }
    }
</style>
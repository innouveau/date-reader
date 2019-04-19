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
    <a class="event" :href="day.event.url">
        <div class="event__date">
            {{date}}
        </div>
        <div class="event__title">
            {{day.event.title}}
        </div>
        <div class="event__description">
            {{day.event.description}} (...)
            <span>Lees verder</span>
        </div>
    </a>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .event {
        padding: 20px 0;
        border-bottom: 2px solid #BEBEBE;
        line-height: 1.625;
        text-decoration: none;

        .event__date {
            color: $mainColor;
            font-weight: 700;
        }

        .event__title {
            font-weight: 700;
            color: #000;
        }

        .event__description {
            font-size: 16px;
            color: #000;

            span {
                color: $mainColor;
                text-decoration: underline;
            }
        }
    }
</style>
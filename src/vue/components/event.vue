<script>

    export default {
        name: 'event',
        props: {
            event: {
                type: Object,
                required: true
            }
        }
    }
</script>


<template>
    <a class="event" :href="event.url">
        <div class="event__title">
            {{event.title}}
        </div>
        <div class="event__description">
            {{event.description}} (...)
            <span>Lees verder</span>
        </div>
    </a>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .event {
        text-decoration: none;

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
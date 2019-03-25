<script>
    import {isEqual, isBefore, isAfter} from 'date-fns';
    import {isInBetween} from '@root/vue/tools';

    export default {
        name: 'day',
        props: {
            day: {
                type: Object,
                required: true
            }
        },
        computed: {
            hasEvent() {
                return this.day.event;
            }
        },
        methods: {
            selectDay() {


            }
        }
    }
</script>


<template>
    <div
        @click="selectDay()"
        :class="{'day--with-event': hasEvent}"
         class="day">{{day.day}}</div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .day {
        width: 38px;
        height: 38px;
        background: #ddd;
        margin: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;

        .tiny {
            font-size: 8px;
            margin-left: 2px;
        }

        &.day--with-event {
            background: $mainColor;
            color: #000;
        }
    }
</style>
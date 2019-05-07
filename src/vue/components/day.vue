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
                return this.day.events.length > 0;
            },
            isWeekend() {
                return this.day.weekend;
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
        :class="{
            'day--with-event': hasEvent,
            'day--weekend': isWeekend
        }"
         class="day">{{day.day}}</div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .day {
        width: 56px;
        height: 54px;
        background: #fff;
        border: $table-border;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
        margin-right: -1px;
        margin-bottom: -1px;
        font-weight: 700;

        .tiny {
            font-size: 8px;
            margin-left: 2px;
        }

        &.day--weekend {
            background: #E6E6E6;
        }

        &.day--with-event {
            background: $mainColor;
            color: #000;
        }
    }
</style>
<script>
    import {getDaysInMonth, getDay} from 'date-fns';
    import day from './day';

    export default {
        name: 'month',
        components: {
            day
        },
        props: {
            month: {
                type: Object,
                required: true
            },
            monthKey: {
                type: Number
            }
        },
        data() {
            return {
                weekDays: ['M', 'D', 'W', 'D', 'V', 'Z', 'Z']
            }
        }
    }
</script>


<template>
    <div class="month">
        <div class="month__label">
            {{month.monthName}} {{month.year}}
        </div>
        <div class="week">
            <div
                v-for="d in weekDays"
                class="week__day">{{d}}</div>
        </div>
        <div class="month__days">
            <div
                :style="{'width': (month.dayOfTheWeekOfFirst * 40) + 'px'}"
                class="spacer"></div>
            <day
                v-for="(day, index) in month.days"
                :key="index"
                :day="day"/>
        </div>
    </div>
</template>


<style lang="scss">
    .month {
        width: 300px;
        padding: 10px;

        .month__label {
            margin-bottom: 4px;
            text-align: center;
        }

        .week {
            display: flex;

            .week__day {
                width: 38px;
                height: 38px;
                margin: 1px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #555;
                cursor: default;
                font-size: 10px;
            }
        }

        .month__days {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
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
                weekDays: ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo']
            }
        }
    }
</script>


<template>
    <div class="month">
        <div class="week">
            <div
                v-for="(d, index) in weekDays"
                :class="{'week_day--weekend': index > 4}"
                class="week__day">{{d}}</div>
        </div>
        <div class="month__days">
            <div
                :style="{'width': (month.dayOfTheWeekOfFirst * 55) + 'px'}"
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
        width: 386px;
        margin-right: 10px;

        .week {
            display: flex;

            .week__day {
                width: 56px;
                height: 53px;
                margin: 1px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: default;

                &.week_day--weekend {
                    color: #BEBEBE;
                }
            }
        }

        .month__days {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
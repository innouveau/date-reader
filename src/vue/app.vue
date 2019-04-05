<script>
    import navigator from './components/navigator';
    import month from './components/month';
    import events from './components/events';

    export default {
        name: 'app',
        components: {
            navigator, month, events
        },
        methods: {

        },
        computed: {
            months() {
                return this.$store.state.months;
            },
            left() {
                return -this.$store.state.currentMonthIndex * 396;
            }
        }
    }
</script>


<template>
    <div class="datereader">
        <div class="datereader__calendar">
            <div
                    class="datereader__container">
                <navigator></navigator>
                <div class="month__container">
                    <div
                            :style="{'left': left + 'px'}"
                            class="months__slider">
                        <month
                                v-for="(month, index) in months"
                                :month="month"
                                :key="index"
                                :month-key="index"></month>
                    </div>
                </div>
            </div>
        </div>

        <div class="datereader__events">
            <events/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@styles/index.scss';
    @import '@styles/variables.scss';

    .datereader {
        font-family: inherit;
        font-size: 18px;
        display: flex;
        justify-content: space-between;

        .datereader__calendar {
            height: 434px;
            width: calc(50% - 10px);

            .datereader__container {
                height: 100%;
                width: 386px;

                .month__container {
                    position: relative;
                    height: 100%;
                    overflow: hidden;

                    .months__slider {
                        display: flex;
                        position: absolute;
                        top: 0;
                        transition: left 0.3s ease;

                    }

                }

                .feedback {
                    padding: 10px;
                    color: #888;
                    height: 50px;
                }
            }
        }

        .datereader__events {
            width: calc(50% - 10px);
            overflow: auto;
            height: 434px;
        }

        @media (max-width: 768px) {
            display: block;

            .datereader__calendar,
            .datereader__events {
                width: 100%;
            }
        }
    }
</style>
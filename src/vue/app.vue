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
        <events/>
    </div>
</template>


<style lang="scss">
    @import '@styles/index.scss';
    @import '@styles/variables.scss';

    .datereader {
        font-family: inherit;
        display: flex;
        height: 434px;
        font-size: 18px;

        @media (max-width: 768px) {
            display: block;
            width: 100%;
        }

        .datereader__container {
            width: 386px;
            flex-grow: 0;
            flex-shrink: 0;
            margin-right: 94px;
            height: 374px;

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
</style>
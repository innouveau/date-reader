<script>
    export default {
        name: 'navigator',
        components: {

        },
        computed: {
            canSlidePrev() {
                return this.$store.state.currentMonthIndex > 0;
            },
            canSlideNext() {
                return this.$store.state.currentMonthIndex < (this.$store.state.totalMonths - 1);
            },
            month() {
                return this.$store.state.months[this.$store.state.currentMonthIndex];
            }
        },
        methods: {
            prevMonth() {
                if (this.canSlidePrev) {
                    this.$store.commit('slidePrev');
                }
            },
            nextMonth() {
                if (this.canSlideNext) {
                    this.$store.commit('slideNext');
                }
            }
        }
    }
</script>


<template>
    <div class="navigator">
        <div
            @click="prevMonth()"
            :class="{'navigator__tool--disabled': !canSlidePrev}"
            class="navigator__tool navigator__tool--left"></div>
        <div
            @click="nextMonth()"
            :class="{'navigator__tool--disabled': !canSlideNext}"
            class="navigator__tool navigator__tool--right"></div>

        <div class="month__label">
            {{month.monthName}} {{month.year}}
        </div>
    </div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .navigator {
        height: 60px;
        position: relative;

        .month__label {
            position: absolute;
            bottom: 13px;
            left: 44px;
            font-size: 28px;
            font-weight: 700;
            vertical-align: text-bottom;
            line-height: 1;
        }

        .navigator__tool {
            width: 18px;
            height: 18px;
            cursor: pointer;
            position: absolute;
            bottom: 15px;

            &:after {
                position: absolute;
                left: 0;
                top: 0;
                content: '';
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                cursor: pointer;
            }

            &.navigator__tool--left {
                left: 0;

                &:after {
                    border-right: 18px solid #000;
                }
            }

            &.navigator__tool--right {
                right: 0;

                &:after {
                    border-left: 18px solid #000;
                }
            }

            &.navigator__tool--disabled {
                opacity: 0.5;
                cursor: not-allowed;

                &:after {
                    cursor: not-allowed;
                }
            }
        }
    }
</style>
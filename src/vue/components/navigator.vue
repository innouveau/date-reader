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
        <div class="navigator__tools">
            <div
                @click="prevMonth()"
                :class="{'navigator__tool--disabled': !canSlidePrev}"
                class="navigator__tool">
                <i class="fas fa-arrow-left"></i>
            </div>
            <div
                @click="nextMonth()"
                :class="{'navigator__tool--disabled': !canSlideNext}"
                class="navigator__tool">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@styles/variables.scss';

    .navigator {
        padding: 10px;
        height: 50px;

        .navigator__tools {
            display: flex;
            align-items: center;
            height: 100%;

            .navigator__tool {
                background: $allowedColor;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 4px;
                cursor: pointer;

                &.navigator__tool--disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                i {
                    font-size: 26px;
                    margin-bottom: 3px;

                    &.fa-arrow-left {

                        &:after {
                            content: '←';
                        }
                    }

                    &.fa-arrow-right {

                        &:after {
                            content: '→';
                        }
                    }
                }
            }
        }
    }
</style>
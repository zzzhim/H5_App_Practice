<template>
    <transition name="fade">
        <div class="message" v-if="bool">
            <div class="message-box">
                <div class="message-box-content" v-text="content"></div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                bool: false
            }
        },
        props: {
            content: {
                type: String
            },
            show: {
                type: Boolean
            }
        },
        mounted() {
            const that = this

            that.bool = that.show
            setTimeout(function() {
                that.bool = false
            }, 2000)
        }
    }
</script>

<style lang="scss" scoped>
    .message {
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 10001;

        &-box {
            width: 4rem;
            height: 2rem;
            background-color: rgba(50, 50, 51, 0.88);
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            @include mixin-flex(center, center);
            text-align: center;

            &-content {
                width: 4rem;
                height: 0.8rem;
                @include mixin-color(white);
                box-sizing: border-box;
                padding: 0px 0.2rem;
                letter-spacing: 0;
                @include mixin-textHiddens(2);
                overflow: hidden;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

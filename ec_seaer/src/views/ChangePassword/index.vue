<template>
    <div class="app">
        <v-navigation></v-navigation>

        <div class="main">
            <v-scroll :obj="obj">
                <h1 class="main-title">Change Password</h1>

                <form class="form">
                    <input
                        class="form-list"
                        placeholder="Please enter the existing password"
                        type="text">
                    <input
                        class="form-list"
                        placeholder="Please enter the new password"
                        type="text">
                    <input
                        class="form-list"
                        placeholder="Please enter the new password"
                        type="text">

                    <button class="form-btn" type="button">Modify My Password</button>
                </form>
            </v-scroll>
        </div>

        <v-message
            content="Your password is incorrect. Please fill in the correct password Please fill in the correct passwordPlease fill in the correct password"
            :show="false">
        </v-message>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import Message from '@/components/Message'
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            return {
                obj: {
                    on:{
                        setTranslate: function(translate){
                            var active = document.activeElement
                            active.blur()
                        }
                    }
                }
            }
        },
        methods: {
        },
        mounted() {
        },
        components: {
            'v-navigation': Navigation,
            'v-message': Message,
            'v-scroll': Scroll
        }
    }
</script>

<style lang="scss" scoped>
    .app {
        height: 100vh;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        padding-top: 0.9rem;
    }

    .main {
        height: 100%;
        overflow: hidden;

        &-title {
            height: 2rem;
            line-height: 2rem;
            font-family: Arial;
            font-size: 0.36rem;
            letter-spacing: 0.02rem;
            text-align: center;
            @include mixin-color(grey);
        }

        .form {
            width: 7.5rem;
            box-sizing: border-box;
            padding: 0px 0.6rem;

            &-list {
                width: 100%;
                height: 1rem;
                border: none;
                border-bottom: 0.01rem solid #cccccc;
                border-radius: 0px;
                margin-top: 0.04rem;

                @mixin mixin-input-placeholder {
                    font-family: Arial;
                    font-size: 0.28rem;
                    letter-spacing: 0rem;
                    @include mixin-color(dark);
                }
        
                &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                    @include mixin-input-placeholder;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    @include mixin-input-placeholder;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    @include mixin-input-placeholder;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                    @include mixin-input-placeholder;
                }
            }

            &-btn {
                display: block;
                margin: 0px auto;
                width: 5.23rem;
                height: 0.65rem;
                background-color: #0b2f8d;
                border: none;
                font-family: Arial;
                font-size: 0.24rem;
                letter-spacing: 0rem;
                margin-top: 1rem;
                @include mixin-color(white);
                @include mixin-bg-color(blue);
            }

        }
    }

    .swiper-container {
        width: 100%;
        height:100%;
    }
    .swiper-slide {
        height: auto;
    }
</style>

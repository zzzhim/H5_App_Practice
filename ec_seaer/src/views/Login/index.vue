<template>
    <div class="app">
        <v-scroll :obj="obj">
            <div class="main">
                <div class="main-title">
                    <h1>Hello,</h1>
                    <p>Welcome to Seaer</p>
                </div>
                <form class="form">
                    <input
                        class="form-list"
                        placeholder="Please enter your email address"
                        type="text">
                    <input
                        class="form-list"
                        placeholder="Please enter your password"
                        type="text">
                    <!-- 验证码 -->
                    <div class="form-code"></div>

                    <section class="form-btns">
                        <router-link to="/ForgetPassword">Forgot your password? </router-link>
                        <button class="" type="button">Sign In</button>
                        <router-link to="/Register">New User ？<span class="form-btns-join">Join In</span> </router-link>
                    </section>
                </form>
            </div>
        </v-scroll>
    </div>
</template>

<script>
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            return {
                obj: {
                    resistance : true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    setWrapperSize: true,
                    scrollbar: {},
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
            'v-scroll': Scroll
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 100vh;

        &-title {
            box-sizing: border-box;
            padding: 0px 30px;
            padding-top: 0.9rem;
            margin-bottom: 1.5rem;

            & > h1 {
                font-family: Arial;
                font-size: 0.58rem;
                line-height: 1;
                letter-spacing: 0.03rem;
                margin-bottom: 0.3rem;
                @include mixin-color(black);
            }

            & > p {
                font-family: Arial;
                font-size: 0.35rem;
                line-height: 1;
                letter-spacing: 0.02rem;
                @include mixin-color(dark);
            }
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

            &-code {
                height: 1rem;
            }

            &-btns {
                margin-top: 1.4rem;
                text-align: center;
                @include mixin-flex(center, center, column);

                & > button {
                    display: block;
                    margin: 0px auto;
                    width: 5.23rem;
                    height: 0.65rem;
                    border: none;
                    font-family: Arial;
                    font-size: 0.24rem;
                    letter-spacing: 0rem;
                    margin-top: 0.37rem;
                    margin-bottom: 0.66rem;
                    @include mixin-color(white);
                    @include mixin-bg-color(blue);
                }

                & > a {
                    font-family: Arial;
                    text-decoration: underline;
                    font-size: 0.22rem;
                    line-height: 1;
                    letter-spacing: 0rem;
                    @include mixin-color(grey);
                }

                &-join {
                    font-family: Arial;
                    font-size: 0.24rem;
                    letter-spacing: 0rem;
                    @include mixin-color(blue);
                }
            }

        }
    }
</style>

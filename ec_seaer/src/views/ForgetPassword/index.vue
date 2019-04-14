<template>
    <div class="app">
        <v-navigation></v-navigation>

        <div class="main">
            <v-scroll :obj="obj">
                <h1 class="main-title">Forget password</h1>

                <form class="form">
                    <input
                        class="form-list"
                        placeholder="Please enter your email address"
                        type="text">

                    <section>
                        <div class="form-block">
                            <input
                                maxlength="1"
                                ref="code"
                                v-model="code1"
                                class="form-block-code"
                                type="text">
                            <input
                                maxlength="1"
                                ref="code"
                                v-model="code2"
                                class="form-block-code"
                                type="text">
                            <input
                                maxlength="1"
                                ref="code"
                                v-model="code3"
                                class="form-block-code"
                                type="text">
                            <input
                                maxlength="1"
                                ref="code"
                                v-model="code4"
                                class="form-block-code"
                                type="text">
                            <button class="form-block-send" type="button">send</button>
                        </div>
                    </section>

                    <input
                        class="form-list"
                        placeholder="Please enter your password"
                        type="text">
                    <input
                        class="form-list"
                        placeholder="Please enter your Email Address"
                        type="text">

                    <button class="form-btn" type="button">Submit</button>
                </form>
            </v-scroll>
        </div>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation"
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            return {
                check: true,
                code1: '',
                code2: '',
                code3: '',
                code4: '',
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
        computed: {
            code() {
                return this.code1 + this.code2 + this.code3 + this.code4
            }
        },
        methods: {
        },
        mounted() {
        },
        watch: {
            code: function(newVal, oldVal) {
                var code = document.querySelectorAll('.form-block-code')

                if(newVal.length >= oldVal.length) {
                    if(newVal.length < 4) {
                        code[newVal.length].focus()
                    }else {
                        code[3].focus()
                    }
                }else {
                    if(newVal.length > 0) {
                        code[newVal.length - 1].focus()
                    }else {
                        code[0].focus()
                    }
                }
            }
        },
        components: {
            'v-navigation': Navigation,
            'v-scroll': Scroll
        }
    }
</script>

<style lang="scss" scoped>
    @mixin mixin-input-placeholder {
        font-family: Arial;
        font-size: 0.28rem;
        letter-spacing: 0rem;
        @include mixin-color(dark);
    }

    .app {
        height: 100vh;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        padding-top: 0.9rem;
    }

    .main {
        height: 100%;

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

            &-block {
                width: 100%;
                position: relative;
                height: 1rem;

                &-code {
                    text-align: center;
                    width: 0.8rem;
                    height: 0.5rem;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    box-sizing: border-box;
                    border: none;
                    border-bottom: 0.01rem solid #cccccc;
                }

                &-code:nth-of-type(2) {
                    left: 1.07rem;
                }

                &-code:nth-of-type(3) {
                    left: 2.16rem;
                }

                &-code:nth-of-type(4) {
                    left: 3.24rem;
                }

                &-send {
                    width: 1.65rem;
                    height: 0.51rem;
                    border: solid 0.01rem #0b2f8d;
                    background-color: transparent;
                    font-family: Arial;
                    font-size: 0.28rem;
                    letter-spacing: 0rem;
                    @include mixin-color(blue);
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                }
            }

            .checkbox {
                position: relative;
                margin-top: 0.36rem;
                @include mixin-flex(flex-start, center);

                &-service {
                    font-family: ArialMT;
                    font-size: 0.24rem;
                    letter-spacing: 0rem;
                    @include mixin-color(red);
                }

                & input[type="checkbox"] {
                    display: none;
                }

                input[type="checkbox"] + label {
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    width: 0.24rem;
                    height: 0.24rem;
                    border: solid 0.01rem #dddddd;
                    margin-right: 0.24rem;
                }
                
                input[type="checkbox"]:checked + label {
                    @include mixin-bg-color(blue);
                }

                input[type="checkbox"]:checked + label:before {
                    content: "";
                    width: 40%;
                    height: 15%;
                    border: 1px solid #ffffff;
                    border-top: none;
                    border-right: none;
                    background: transparent;
                    -webkit-transform: rotate(-45deg) translate(-50%, -50%);
                    transform: rotate(-45deg) translate(-50%, -50%);
                    position: absolute;
                    top: 21%;
                    left: 50%;
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
</style>

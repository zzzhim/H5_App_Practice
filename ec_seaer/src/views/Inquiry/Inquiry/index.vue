<template>
    <div class="app">
        <v-navigation title="Send Inquiry"></v-navigation>

        <form class="main" action="" method="get">
            <v-scroll :obj="obj">
                <section class="main-item">
                    <div class="main-item-list">
                        <span>First Name</span>
                        <input
                            name="first_name"
                            placeholder="Please enter your First Name"
                            type="text">
                    </div>
                    <div class="main-item-list">
                        <span>Last Name</span>
                        <input
                            name="last_name"
                            placeholder="Please enter your First Name"
                            type="text">
                    </div>
                </section>

                <section class="main-item">
                    <div class="main-item-list">
                        <span>
                            <strong>*</strong>
                            Email Address
                        </span>
                        <input
                            name="email"
                            placeholder="Please enter your Email Address"
                            type="text">
                    </div>
                    <div class="main-item-list">
                        <span>
                            <strong>*</strong>
                            Phone
                        </span>
                        <input
                            name="phone"
                            placeholder="Please enter your Phonee"
                            type="text">
                    </div>
                </section>

                <section class="main-item">
                    <div class="main-item-list">
                        <span>
                            <strong>*</strong>
                            Subject
                        </span>
                        <input
                            name="subject"
                            placeholder="Please enter your Subject"
                            type="text">
                    </div>
                    <div class="main-item-textarea">
                        <textarea
                            name="message"
                            maxlength="1000"
                            placeholder="Please describe your needs in detail"
                            v-model="message"
                            >
                        </textarea>
                        <span v-text="message.length + '/1000'"></span>
                    </div>
                </section>

                <!-- 谷歌验证码 -->
                <!-- <div class="main-verification">
                    <div
                        class="g-recaptcha"
                        data-sitekey="">
                    </div>
                </div> -->

                <button class="main-sub" type="button" @click="$router.push('/Inquiry/Success')">Submit</button>
            </v-scroll>
        </form>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            return {
                message: '',
                obj: {
                    on:{
                        setTranslate(translate){
                            const active = document.activeElement
                            active.blur()
                        }
                    }
                }
            }
        },
        mounted() {
        },
        components: {
            'v-navigation': Navigation,
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
        width: 7.5rem;
        height: calc(100vh - 0.9rem);
        background-color:  #f7f7f7;

        &-item {
            margin-bottom: 0.2rem;

            &-list:first-child {
                border-top: none;
            }

            &-list {
                width: 7.5rem;
                height: 0.8rem;
                box-sizing: border-box;
                padding-right: 0.3rem;
                padding-left: 0.3rem;
                @include mixin-bg-color(white);
                @include mixin-flex(space-between, center);
                position: relative;
                border-top: 0.01rem solid #f7f7f7;

                & > span, & > input {
                    font-family: Arial;
                    font-size: 0.22rem;
                    line-height: 1;
                    letter-spacing: 0rem;
                    @include mixin-color(grey);
                }

                & > span > strong {
                    font-size: 0.22rem;
                    @include mixin-color(red);
                }

                & > input {
                    border: none;
                    width: 4rem;
                    height: 0.6rem;
                    padding-right: 0.2rem;
                    padding-left: 0.2rem;
                    @include mixin-color(black);
                    text-align: right;
                }

                @mixin mixin-input-placeholder {
                    font-family: Arial;
                    font-size: 0.22rem;
                    color: #cccccc;
                    text-align: right;
                }

                & > input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                    @include mixin-input-placeholder;
                }
                & > input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    @include mixin-input-placeholder;
                }
                & > input::-moz-placeholder { /* Mozilla Firefox 19+ */
                    @include mixin-input-placeholder;
                }
                & > input:-ms-input-placeholder { /* Internet Explorer 10-11 */
                    @include mixin-input-placeholder;
                }
            }

            &-textarea {
                position: relative;

                & > textarea {
                    width: 7.5rem;
                    height: 2.5rem;
                    background-color: #ffffff;
                    resize: none;
                    border: none;
                    border-top: 0.01rem solid #f7f7f7;
                    box-sizing: border-box;
                    padding: 0.26rem 0.42rem;
                }

                & > textarea::-webkit-input-placeholder {
                    font-family: Arial;
                    font-size: 0.22rem;
                    letter-spacing: 0rem;
                    color: #cccccc;
                }

                & > textarea:focus {
                    outline: none;
                }

                & > span {
                    position: absolute;
                    right: .38rem;
                    bottom: .26rem;
                }
            }
        }

        &-verification {
            width: 7.5rem;
            height: 0.8rem;
            @include mixin-bg-color(white);
        }

        &-sub {
            width: 5.23rem;
            height: 0.65rem;
            font-family: Arial;
            font-size: 0.24rem;
            line-height: 1;
            letter-spacing: 0rem;
            @include mixin-color(white);
            @include mixin-bg-color(blue);
            border: none;
            display: block;
            margin: 0px auto;
            margin-top: 1.24rem;
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

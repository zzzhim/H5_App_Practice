<template>
    <div style="background: #f7f7f7;">
        <v-scroll :obj="obj">
            <header
                class="header"
                :style="`background-image: url(${ require('@/assets/bg/beijing.png') }); background-size: cover;`">

                <div class="header-title">Personal Center</div>

                <!-- 未登陆 -->
                <!-- <div class="header-login"> 
                    <p>Not logged in</p>
                    <section class="header-login-btns">
                        <button type="button">Sign In</button>
                        <button type="button">Join Free</button>
                    </section>
                </div> -->

                <!-- 登陆后 -->
                <div class="header-detail">
                    <div class="header-detail-name">
                        <span>cheng-nancy</span>
                        <img
                            @click="onClick"
                            :src="require('@/assets/icon/bj.png')"
                            alt="">
                    </div>
                    <p>15241521422@139.com</p>
                </div>
            </header>

            <div class="main">
                <dd>
                    <router-link to="/ChangePassword">
                        <dl class="main-list" style="marginTop: 0px;">
                            <img :src="require('@/assets/icon/xgmm.png')" class="main-list-icon" alt="">
                            <p class="main-list-text">Change Password</p>
                            <img :src="require('@/assets/icon/xyb.png')" class="main-list-next" alt="">
                        </dl>
                    </router-link>

                    <router-link to="/Feedback/Feedback">
                        <dl class="main-list">
                            <img :src="require('@/assets/icon/yjfk.png')" class="main-list-icon" alt="">
                            <p class="main-list-text">Feedback</p>
                            <img :src="require('@/assets/icon/xyb.png')" class="main-list-next" alt="">
                        </dl>
                    </router-link>

                    <router-link to="/Article">
                        <dl class="main-list">
                            <img :src="require('@/assets/icon/gywm.png')" class="main-list-icon" alt="">
                            <p class="main-list-text">About us</p>
                            <img :src="require('@/assets/icon/xyb.png')" class="main-list-next" alt="">
                        </dl>
                    </router-link>

                    <router-link to="/Article?name=contact">
                        <dl class="main-list">
                            <img :src="require('@/assets/icon/lxwm.png')" class="main-list-icon" alt="">
                            <p class="main-list-text">Contact us</p>
                            <img :src="require('@/assets/icon/xyb.png')" class="main-list-next" alt="">
                        </dl>
                    </router-link>
                </dd>
            </div>
        </v-scroll>

        <v-footer Active="Personal center"></v-footer>

        <div class="Modal" v-show="Modal" style="display: none"> <!-- 修改名称 -->
            <form class="Modal-block">
                <div class="Modal-block-title">Edit</div>
                <input
                    ref="firstName"
                    placeholder="Please enter the first name"
                    class="Modal-block-input"
                    type="text">
                <input
                    placeholder="Please enter the last name"
                    class="Modal-block-input"
                    type="text">
                <section class="Modal-block-btns">
                    <button
                        type="button"
                        @click="Modal=false"> <!-- Modal 为false 隐藏， 否则显示 -->
                        cancel
                    </button>
                    <button type="submit">OK</button>
                </section>
            </form>
        </div>
    </div>
</template>

<script>
    import Footer from '@/components/Footer'
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            return {
                Modal: false,
                obj: {
                    resistance : true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    setWrapperSize: true,
                    scrollbar: {}
                }
            }
        },
        methods: {
            onClick() {
                this.Modal = true
                this.$refs.firstName.focus()
            }
        },
        mounted() {
        },
        components: {
            'v-footer': Footer,
            'v-scroll': Scroll
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        width: 7.5rem;
        height: 3.84rem;
        display: block;
        text-align: center;
        @include mixin-flex(space-around, center, column);

        &-title {
            width: 7.5rem;
            font-family: Arial;
            font-size: 0.32rem;
            line-height: 1;
            letter-spacing: 0rem;
            @include mixin-color(white);
        }

        &-login {
            margin-bottom: 0.8rem;

            & > p {
                font-family: Arial;
                font-size: 0.32rem;
                line-height: 1;
                letter-spacing: 0rem;
                margin-bottom: 0.6rem;
                @include mixin-color(white);
            }

            &-btns {
                @include mixin-flex(center, center);

                button {
                    width: 1.55rem;
                    height: 0.45rem;
                    line-height: 1;
                    font-family: Arial;
                    font-size: 0.24rem;
                    letter-spacing: 0rem;
                    border: solid 0.01rem #ffffff;
                    @include mixin-color(white);
                    background-color: rgba($color: #ffffff, $alpha: 0.1);
                    box-sizing: border-box;
                }

                button:first-of-type {
                    margin-right: 0.44rem;
                }
            }
        }

        &-detail {
            text-align: center;
            margin-bottom: 0.8rem;

            &-name {
                width: 7.5rem;
                font-family: Arial;
                font-size: 0.32rem;
                letter-spacing: 0rem;
                line-height: 1;
                @include mixin-color(white);
                margin-bottom: 0.2rem;

                & > img {
                    width: 0.24rem;
                    height: 0.2rem;
                }
            }

            & > p:last-of-type {
                width: 7.5rem;
                font-family: Arial;
                font-size: 0.22rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0rem;
                color: #d1deff;
            }
        }
    }

    .main {
        width: 7.5rem;
        height: calc(100vh - 3.84rem - 1rem);
        background-color: #f7f7f7;
        box-sizing: border-box;
        padding: 0.2rem 0px;

        &-list {
            width: 7.5rem;
            height: 0.8rem;
            @include mixin-bg-color(white);
            @include mixin-flex(flex-start, center);
            box-sizing: border-box;
            padding: 0px .36rem;
            position: relative;
            margin-top: .2rem;

            &-icon {
                width: .25rem;
                height: auto;
                display: block;
                position: absolute;
                top: 48%;
                left: .36rem;
                transform: translateY(-50%);
            }

            &-text {
                font-family: Arial;
                font-size: 0.22rem;
                line-height: 1;
                letter-spacing: 0rem;
                margin-left: .5rem;
                @include mixin-color(grey);
            }

            &-next {
                width: 0.11rem;
                height: 0.19rem;
                display: block;
                position: absolute;
                top: (0.8rem - 0.19rem) / 2;
                right: .36rem;
            }
        }
    }

    .Modal {

        &::before {
            content: '';
            width: 100vw;
            height: 100vh;
            display: block;
            background-color: rgba(0,0,0,0.1);
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 10000;
        }

        &-block {
            width: 5.58rem;
            // height: 3.57rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10001;
            @include mixin-bg-color(white);
            @include mixin-flex(flex-start, center, column);

            &-title {
                width: 100%;
                text-align: center;
                font-family: Arial;
                font-size: 0.24rem;
                line-height: 1;
                letter-spacing: 0rem;
                @include mixin-color(black);
                margin-top: 0.48rem;
            }

            &-input {
                width: 4.67rem;
                height: 0.5rem;
                font-size: 0.24rem;
                margin-top: 0.2rem;
                border: none;
                border-bottom: 0.01rem solid #cccccc;
                @include mixin-color(black);
            }

            &-btns {
                margin-top: 0.35rem;
                margin-bottom: 0.5rem;
                @include mixin-flex(center, center);

                & > button {
                    width: 0.99rem;
                    height: 0.37rem;
                    border: none;
                    font-family: Arial;
                    font-size: 0.24rem;
                    letter-spacing: 0rem;
                    @include mixin-color(white);
                    @include mixin-bg-color(blue);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                & > button:first-of-type {
                    margin-right: 1.22rem;
                    background-color: #cccccc;
                }
            }
        }
    }
</style>
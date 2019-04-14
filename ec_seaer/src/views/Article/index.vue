<template>
    <div class="app">
        <v-navigation title="About us"></v-navigation>

        <div class="main">
            <v-scroll :obj="obj">
                <div class="about-title" v-if="$route.query.name !== 'contact'">
                    <div
                        :class="nav == 0 ? 'about-title-active' : null"
                        v-on:click="nav = 0, onClickNav('Company Profile')">
                        Company Profile
                    </div>
                    <div
                        :class="nav == 1 ? 'about-title-active' : null"
                        v-on:click="nav = 1, onClickNav('Factory Information')">
                        Factory Information
                    </div>
                    <div
                        :class="nav == 2 ? 'about-title-active' : null"
                        v-on:click="nav = 2, onClickNav('FAQ')">
                        FAQ
                    </div>
                </div>

                <div class="about-content">
                    <p class="about-content-title">Company Profile</p>
                    <p class="about-content-time">2018-11-13 10:10</p>
                    <!-- 后台编辑的文章 -->
                    <div>
                        111
                        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                        1111
                    </div>
                </div>
            </v-scroll>
        </div>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation"
    import Scroll from '@/components/Scroll'
    import request from '@/request/Fly.js'

    export default {
        data() {
            return {
                nav: 0,
                obj: {}
            }
        },
        methods: {
            onClickNav: function(val) {
                switch (val) {
                    case 'Company Profile':
                        request.get('/todo_list')
                            .then(res => {
                                console.log(res)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        break
                    case 'Factory Information':
                        request.get('/todo_list')
                            .then(res => {
                                console.log(res)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        break
                    case 'FAQ':
                        request.get('/todo_list')
                            .then(res => {
                                console.log(res)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        break
                }
            }
        },
        mounted: function() {
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
        height: 100%;
        overflow: hidden;
        background-color: #f7f7f7;

        .about-title {
            width: 7.5rem;
            height: 0.9rem;
            border-bottom: solid 0.01rem #dddddd;
            @include mixin-flex(space-between, center);
            @include mixin-bg-color(white);

            & > div {
                width: 2.5rem;
                height: 0.9rem;
                line-height: 0.9rem;
                text-align: center;
                font-family: Arial;
                font-size: 0.24rem;
                letter-spacing: 0rem;
                @include mixin-color(black);
                position: relative;
            }

            & > div:nth-of-type(2), & > div:nth-of-type(3) {
                &::before {
                    content: '';
                    width: 1px;
                    height: 0.43rem;
                    background-color: #dddddd;
                    position: absolute;
                    top: (0.9rem - 0.43rem) / 2;
                    left: 0px;
                }
            }

            &-active {
                &::after {
                    content: '';
                    width: 1.42rem;
                    height: 0.03rem;
                    background-color: #0b2f8d;
                    position: absolute;
                    bottom: -0.01rem;
                    left: (2.5rem - 1.42rem) / 2;
                }
            }
        }

        .about-content {
            margin-top: 0.18rem;
            @include mixin-bg-color(white);
            box-sizing: border-box;
            padding-top: 0.4rem;

            &-title {
                width: 100%;
                font-family: Arial;
                font-size: 0.26rem;
                @include mixin-color(black);
                text-align: center;
            }

            &-time {
                width: 100%;
                font-family: Arial;
                font-size: 0.22rem;
                @include mixin-color(dark);
                text-align: center;
                margin-bottom: 0.4rem;
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

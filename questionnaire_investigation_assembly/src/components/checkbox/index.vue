<template>
    <div class="checkbox-item">
        <h1 class="title">{{ title }}</h1>
         <el-checkbox-group v-model="checkList" @change="handleChange">
            <div class="checkbox-list" v-for="item in answer" :key="item.id">
                <el-checkbox  :label="item.id">{{ item.seltitle }}</el-checkbox>
            </div>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkList: []
            };
        },
        props: {
            title: {
                type: String,
                default: '我是默认标题'
            },
            sort: {
                default: null
            },
            answer: {
                type: Array,
                required: true,
                default: []
            }
        },
        methods: {
            handleChange(data) {
                const str = data.join(',');
                // 当用户更改选项触发自定义事件
                this.$emit('selectChange', {
                    question_id: this.answer.length ? this.answer[0].question_id : null,
                    sort: this.sort,
                    result: str
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .checkbox-item {

        .title {
            font-size: 18px;
        }

        .checkbox-list {
            line-height: 30px;
        }
    }
</style>

<template>
    <div class="questionnaire">
        <template v-for="item in selectData">
            <v-radio
                v-if="item.typetitle == 'o'"
                :key="item.id"
                :sort="item.sort"
                :title="item.question"
                :answer="item.answer | radioFilters"
                @selectChange="onFillRadioData"
                >
            </v-radio>
            <v-checkbox
                v-else
                :key="item.id"
                :title="item.question"
                :sort="item.sort"
                :answer="item.answer | radioFilters"
                @selectChange="onFillCheckboxData"
                >
            </v-checkbox>
        </template>
    </div>
</template>

<script>
    // 单选组件
    import Radio from '@/components/radio';
    // 复选组件
    import Checkbox from '@/components/checkbox';
    // 依赖库
    import _ from 'lodash';

    import axios from 'axios';

    export default {
        name: "home",
        data() {
            return {
                selectData: [],
                selectionData: []
            };
        },
        filters: {
            // 过滤数据，然后返回想要的数据
            radioFilters(data) {
                const arr = [];
                for(let item of data) {
                    arr.push({
                        id: item.id,
                        seltitle: item.seltitle,
                        sort: item.sort,
                        question_id: item.question_id
                    });
                };
                // 返回组件需要的数据
                return arr;
            }
        },
        methods: {
            // 获取数据
            getSelect() {
                // 请求本地mock数据
                axios.get('/api/select')
                    .then(res => {
                        const { data } = res;
                        this.selectData = data;
                        this.defaultData(data);
                    });

                return null;
            },
            // 默认数据
            defaultData(data) {
                const arr = [];
                _.forEach(data, (value, key) => {
                    arr.push({
                        question_id: _.head(value.answer).question_id,
                        sort: value.sort,
                        typetitle: value.typetitle,
                        result: ''
                    });
                });

                this.selectionData = arr;
            },
            // 去重
            onDuplicateRemoval(data, newData) {
                // 去除与当前数据重复的数据
                const arr = _.filter(data,(v) => (v.question_id != newData.question_id));
                // 添加当前数据
                arr.push(newData);
                return arr;
            },
            // 过滤单选
            onFillRadioData(data) {
                const arr = this.selectionData;
                // 添加类型为单选
                data.typetitle = 'o'
                // this.selectionData = this.onDuplicateRemoval(arr, data);
                this.selectionData = _.sortBy(this.onDuplicateRemoval(arr, data), function(o) { return o.sort; });

                console.log(this.selectionData)
            },
            // 过滤复选
            onFillCheckboxData(data) {
                const arr = this.selectionData;
                // 添加类型为复选
                data.typetitle = 'd'

                this.selectionData = _.sortBy(this.onDuplicateRemoval(arr, data), function(o) { return o.sort; });
                // this.selectionData = this.onDuplicateRemoval(arr, data);
                console.log(this.selectionData)
            }
        },
        mounted() {
            this.getSelect();
        },
        components: {
            'v-radio': Radio,
            'v-checkbox': Checkbox
        }
    };
</script>

<style lang="less" scoped>
    .questionnaire {
        display: block;
        box-sizing: border-box;
        width: 500px;
        margin: 0px auto;
        padding: 20px 50px;
        background-color: rgb(245, 243, 241);
    }
</style>

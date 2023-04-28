<template>
    <div style="width: 100%;">
        <el-scrollbar :height="window_height">
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    角色权重
                                </div>

                                <el-tooltip effect="dark" content="普通角色:1 中间角色:2 复杂角色:3" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="user" style="width: 100%">
                            <el-table-column prop="username" label="角色名" />
                            <el-table-column prop="weight" label="权重">
                                <template #default="scope">
                                    <el-input-number v-model="scope.row.weight" :min="1" :max="3"
                                        @change="userWeightchange(scope.$index, scope.row)" />
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <div style="height: 20px;">

                </div>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="24">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    用例权重
                                </div>

                                <el-tooltip effect="dark" content="普通用例:5 中间用例:10 复杂用例:15" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="usercase" style="width: 100%">
                            <el-table-column prop="usercaseName" label="用例名" />
                            <el-table-column label="权重">
                                <template #default="scope">
                                    <el-input-number v-model="scope.row.weight" :min="5" :max="15" :step="5" step-strictly
                                        @change="usercaseWeightChange(scope.$index, scope.row)" />
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <div style="height: 20px;">

                </div>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="24">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    TCF
                                </div>

                                <el-tooltip effect="dark" content="technical complexity factor(技术复杂因子)" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-row>
                            <el-col :span="12">
                                <div>
                                    权重：
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <el-input-number v-model="tcf" :precision="2" :step="0.1" :min="0.6" :max="1.3"
                                    @change="tcfChange" />
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <div style="height: 20px;">

                </div>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="24">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    EF
                                </div>

                                <el-tooltip effect="dark" content="environmental(环境复杂因子)" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-row>
                            <el-col :span="12">
                                <div>
                                    权重：
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <el-input-number v-model="ef" :precision="3" :step="0.1" :min="0.425" :max="1.7"
                                    @change="efChange" />
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>

        </el-scrollbar>
        <el-card>
            <el-statistic :value="upc" :precision="3">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                        UPC
                        <el-tooltip effect="dark" content="用例点测量值" placement="top">
                            <el-icon style="margin-left: 4px" :size="12">
                                <Warning />
                            </el-icon>
                        </el-tooltip>
                    </div>
                </template>
            </el-statistic>
        </el-card>

    </div>
</template>

<script setup lang="ts">
import { Warning } from '@element-plus/icons-vue'
import { Ref, ref } from 'vue';
import { weightOfUser, weightOfUsercase } from './type/type'
import { useUsercaseStore } from '../store/store'

const user: weightOfUser[] = ref(useUsercaseStore().getUsercase().users) as Ref<weightOfUser[]> & weightOfUser[]

const usercase: weightOfUsercase[] = ref(useUsercaseStore().getUsercase().usercases) as Ref<weightOfUsercase[]> & weightOfUsercase[]

let uaw = ref(user.reduce((total, currentValue) => {
    return total + (currentValue.weight as number)
}, 0) as number)

let uucw = ref(usercase.reduce((total, currentValue) => {
    return total + (currentValue.weight as number)
}, 0) as number)

let tcf = ref(1)
let ef = ref(1)
let upc = ref((uaw.value + uucw.value) * tcf.value * ef.value)

const userWeightchange = (index: number, row: weightOfUser) => {
    user[index] = row
    let tem: number = user.reduce((total, currentValue) => {
        return total + (currentValue.weight as number)
    }, 0) as number
    uaw.value = tem
    upc.value = (uaw.value + uucw.value) * tcf.value * ef.value
    console.log('触发角色修改');
    console.log(index, row);
}

const usercaseWeightChange = (index: number, row: weightOfUsercase) => {
    usercase[index] = row
    let tem: number = usercase.reduce((total, currentValue) => {
        return total + (currentValue.weight as number)
    }, 0) as number
    uucw.value = tem
    upc.value = (uaw.value + uucw.value) * tcf.value * ef.value
    console.log('触发用例修改');
    console.log(index, row);
}

const tcfChange = (value: number | undefined) => {
    console.log(value);

    tcf.value = value as number
    upc.value = (uaw.value + uucw.value) * tcf.value * ef.value
}

const efChange = (value: number | undefined) => {
    console.log(uaw.value);
    console.log(uucw.value);
    console.log(tcf.value);
    console.log(ef.value);
    ef.value = value as number
    console.log((uaw.value + uucw.value) * tcf.value * ef.value)

    upc.value = (uaw.value + uucw.value) * tcf.value * ef.value
}


//默认高度
const window_height = ref(310)
//检测window窗口改变大小
window.onresize = function () {

    if (window.innerHeight > 600) {
        window_height.value = window.innerHeight * 0.65
    } else {
        window_height.value = window.innerHeight * 0.55
    }
}

</script>
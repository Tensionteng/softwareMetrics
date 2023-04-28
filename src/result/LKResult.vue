<template>
    <div style="width: 100%;">
        <el-scrollbar :height="window_height">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    CS
                                </div>

                                <el-tooltip effect="dark" content="class size (number of attributes and operations)"
                                    placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="cs" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    NOO
                                </div>

                                <el-tooltip effect="dark" content="number of operations overridden" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="noo" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <div style="height: 20px;">

                </div>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    NOA
                                </div>

                                <el-tooltip effect="dark" content="number of added" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="noa" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    SI
                                </div>

                                <el-tooltip effect="dark" content="speciallization index" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="si" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>
        </el-scrollbar>
    </div>
</template>
  
<script lang="ts" setup>
import { Warning } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { LKResult } from './type/type'
import { useLKResultStore } from '../store/store'


// const tableData = useLKResultStore().getLK()
const tableData:LKResult[] = useLKResultStore().getLK()

const window_height = ref('500px') //默认高度
const tableMaxHeight = ref(200)
window.onresize = function () { //检测window窗口改变大小
    // console.log("窗口变化了！")
    console.log(window.innerHeight) //打印window窗口高度
    window_height.value = (window.innerHeight * 0.9) + 'px'
    tableMaxHeight.value = window.innerHeight * 0.9 / 3;
}



</script>
  
<style scoped>
.title {
    font-size: 16px;
}
</style>
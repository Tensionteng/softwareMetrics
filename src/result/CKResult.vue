<template>
    <div style="width: 100%;">
        <el-scrollbar :height="window_height">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    WMC
                                </div>
                                <el-tooltip effect="dark" content="类的加权数量" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="wmc" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    DIT
                                </div>

                                <el-tooltip effect="dark" content="depth of inheritance tree" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="dit" label="度量值" />
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
                                    NOC
                                </div>

                                <el-tooltip effect="dark" content="number of children" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="noc" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    CBO
                                </div>

                                <el-tooltip effect="dark" content="coupling between object" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="cbo" label="度量值" />
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
                                    RFC
                                </div>

                                <el-tooltip effect="dark" content="response for a class" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="rfc" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    LOC
                                </div>

                                <el-tooltip effect="dark" content="lack of cohesion" placement="top">
                                    <el-icon style="margin-left: 4px" :size="20">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="classname" label="类名" />
                            <el-table-column prop="loc" label="度量值" />
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>

        </el-scrollbar>
    </div>
</template>
  
<script lang="ts" setup>
import { Warning } from '@element-plus/icons-vue'
import { Ref, ref } from 'vue';
import { CKResult } from './type/type'
import { useCKResultStore } from '../store/store'


const tableData: CKResult[] = ref(useCKResultStore().getCK() as Ref<CKResult[]> & CKResult[])

const window_height = ref('500px') //默认高度
const tableMaxHeight = ref(100)
window.onresize = function () { //检测window窗口改变大小
    // console.log("窗口变化了！")
    console.log(window.innerHeight) //打印window窗口高度
    window_height.value = (window.innerHeight * 0.9) + 'px'
    tableMaxHeight.value = window.innerHeight * 0.9 / 5;
}


</script>
  
<style scoped>
.title {
    font-size: 16px;
}
</style>
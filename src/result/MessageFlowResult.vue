<template>
    <div style="width: 100%;">
        <el-scrollbar :height="window_height">
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-card>
                        <template #header>
                            <div style="display: inline-flex; align-items: center">
                                <div class="title">
                                    模块信息
                                </div>
                            </div>
                        </template>
                        <el-table :data="tableData" style="width: 100%" :max-height="tableMaxHeight">
                            <el-table-column prop="moduleName" label="模块名" />
                            <el-table-column prop="fan_in" label="扇入" />
                            <el-table-column prop="fan_out" label="扇出" />
                            <el-table-column prop="complexity" label="复杂度" />
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <div style="height: 20px;">
                </div>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <el-card>
                        <el-descriptions class="margin-top" title="信息流统计" :column="2" size="default" border>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        扇入平均值
                                    </div>
                                </template>
                                <div class="data-item">
                                    {{ data.avg_in }}
                                </div>

                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        扇入最大值
                                    </div>
                                </template>
                                <div class="data-item">
                                    {{ data.max_in }}
                                </div>

                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        扇出平均值
                                    </div>
                                </template>
                                <div class="data-item">
                                    {{ data.avg_out }}
                                </div>

                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        扇出最大值
                                    </div>
                                </template>
                                <div class="data-item">
                                    {{ data.max_out }}
                                </div>

                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        调用最大深度
                                    </div>
                                </template>
                                <div class="data-item">
                                    {{ data.depth }}
                                </div>
                            </el-descriptions-item>
                        </el-descriptions>
                    </el-card>
                </el-col>
            </el-row>
        </el-scrollbar>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { messageFlowModule, messageFlow } from './type/type'
import { useMessageFlowStore } from '../store/store'

const data = ref(useMessageFlowStore().getMessageMoudle())
const tableData = ref(data.value.moduleList)

const window_height = ref('500px') //默认高度
const tableMaxHeight = ref(100)
window.onresize = function () { //检测window窗口改变大小
    // console.log("窗口变化了！")
    console.log(window.innerHeight) //打印window窗口高度
    window_height.value = (window.innerHeight * 0.9) + 'px'
    tableMaxHeight.value = window.innerHeight * 0.9 / 3;
}


</script>
  
<style scoped>
.data-item {
    text-align: center;
}

.cell-item {
    display: flex;
    align-items: center;
    width: 100px;
}

.margin-top {
    margin-top: 10px;
}

.title {
    font-size: 16px;
}
</style>
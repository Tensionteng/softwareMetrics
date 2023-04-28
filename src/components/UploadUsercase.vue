<template>
    <div>
        <el-card>
            <el-row>
                <el-col :span="24">
                    <el-steps :active="step" align-center finish-status="success">
                        <el-step title="上传文件" :icon="Upload" />
                        <el-step title="设置权重" :icon="Edit" />
                    </el-steps>
                </el-col>
            </el-row>
        </el-card>

        <router-view></router-view>
    </div>
</template>
  
<script setup lang="ts">
import { Edit, Upload } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'


const route = useRoute()
const router = useRouter()
let step = ref(0)


// 监听路由变化
watch(
    () => route.name,
    () => {
        if (step.value > 2)
            step.value = 0
        else
            step.value++;
    })

const next = () => {
    step.value++;
}
</script>
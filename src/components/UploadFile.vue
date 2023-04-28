<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <el-row :gutter="20">
                    <el-col :span="8">

                    </el-col>
                    <el-col>

                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <span>{{ title }}</span>
                    </el-col>
                    <el-col :span="12">
                        <el-button type="primary" round style="float: right;" @click="submitUpload">确认上传</el-button>
                    </el-col>
                </el-row>
            </div>
        </template>

        <el-upload class="upload-demo" drag action="#" :limit=1 :auto-upload="false" :on-change="handleChange" ref="upload"
            :on-exceed="handleExceed">
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
                拖拽文件至此或 <em>点击上传</em>
            </div>
            <template #tip>
                <div class="el-upload__tip">
                    Only XML and OOM files are accepted
                </div>
            </template>
        </el-upload>

    </el-card>
</template>
  
<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, watch } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadProps, UploadInstance, UploadRawFile } from 'element-plus'
import { get, post } from '../httpConfig/api';
import { CKResult, LKResult, messageFlow, usercaseGraph } from '../result/type/type'
import { useLKResultStore, useCKResultStore, useMessageFlowStore, useUsercaseStore } from '../store/store'

const route = useRoute()
const router = useRouter()
console.log("当前的路由名为：", route.name);

const map = new Map<string, string>([
    ["uploadLK", "/LKResult"],
    ["uploadCK", "/CKResult"],
    ["usercaseUpload", "/uploadUsercase/setWeight"],
    ["messageFlow", "/messageFlowResult"],
])

const titleMap = new Map<string, string>([
    ["uploadLK", "LK度量"],
    ["uploadCK", "CK度量"],
    ["usercaseUpload", "用例点度量"],
    ["messageFlow", "信息流度量"],
])


const title = ref(titleMap.get(route.name as string))

// vue3不会重复渲染组件，所以需要监听路由变化保证card的title变化
watch(
    () => route.name,
    (toParams, previousParams) => {
        // 对路由变化做出响应...
        title.value = titleMap.get(toParams as string)
        console.log("路由变化为: ", toParams);
    })

let filepath: string = ""
let filename: string = ""
let suffix: string = ""
let routePath: string = ""
// 监听上传组件的变化
const handleChange = (file: any, fileLists: any) => {
    filepath = file.raw.path
    filename = file.name
    routePath = route.fullPath
    suffix = filename.split(".").reverse()[0]
    console.log("文件后缀是" + suffix)
    console.log("文件路径是" + filepath)
    console.log("路由路径是" + routePath)
}


const upload = ref<UploadInstance>()
// 只能上传一个文件
const handleExceed: UploadProps['onExceed'] = (files) => {
    const file = files[0] as UploadRawFile // 拿到第二次上传的文件

    ElMessageBox.confirm('重复上传会覆盖之前的材料，是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    })
        .then(() => {
            upload.value!.clearFiles()
            file.uid = genFileId()
            upload.value!.handleStart(file)

            ElMessage({
                type: 'success',
                message: '覆盖成功'
            })
        })
        .catch(() => {
        })


}


const request = {
    "uploadLK": async () => {
        const response = await post<LKResult[]>('LKMetrics', {
            filepath: filepath
        })
        useLKResultStore().changeLK(response.data)
        router.push('/LKResult')
    },
    "uploadCK": async () => {
        const response = await post<CKResult[]>('CKMetrics', {
            filepath: filepath
        })
        useCKResultStore().changeCK(response.data)
    },
    "usercaseUpload": async () => {
        const response = await post<usercaseGraph>('usercaseMetrics', {
            filepath: filepath
        })
        useUsercaseStore().changeUsercase(response.data)
    },
    "messageFlow": async () => {
        const response = await post<messageFlow>('messageFlowMetrics', {
            filepath: filepath
        })
        useMessageFlowStore().changeMessageFlow(response.data)
    }
}

// 点击上传
const submitUpload = async () => {
    if (routePath == "") {
        ElMessage({
            type: 'error',
            message: '还未上传任何文件'
        })
        return
    }

    request[route.name as keyof typeof request]()

    const toResult: string = map.get(route.name as string) as string
    console.log("点击了上传按钮", toResult);
    // router.push('/LKResult')
}

</script>
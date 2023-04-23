<template>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="0" class="el-menu-vertical-demo" @select="selectHandle" :router="true">
                <el-menu-item index="0">
                    <el-icon>
                        <Operation />
                    </el-icon>
                    <span>首页</span>
                </el-menu-item>

                <el-menu-item index="1">
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>面向对象CK度量</span>
                </el-menu-item>

                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>面向对象LK度量</span>
                </el-menu-item>

                <el-menu-item index="3">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>用例点度量</span>
                </el-menu-item>

                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>功能点度量</span>
                </el-menu-item>

            </el-menu>
        </el-aside>
        <el-main>
            <el-card class="box-card">
                <h1>
                    欢迎使用软件度量软件！
                </h1>
                <h1>
                    请在左侧选择度量方式！
                </h1>
            </el-card>

        </el-main>
    </el-container>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Setting,
    Operation
} from '@element-plus/icons-vue'


const selectHandle = (key: string) => {
    console.log(key)
}



</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
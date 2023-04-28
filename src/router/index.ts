import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'
import UploadFileVue from '../components/UploadFile.vue'
import Welcome from "../components/Welcome.vue"
import LKResultVue from '../result/LKResult.vue'
import CKResultVue from '../result/CKResult.vue'
import UploadUsercaseVue from '../components/UploadUsercase.vue'
import UsercaseWeightVue from '../result/UsercaseWeight.vue'
import MessageFlowResultVue from '../result/MessageFlowResult.vue'

const routes: RouteRecordRaw[] = [
    { path: "/", name: "home", component: Welcome },
    { path: "/welcome", name: "welcome", component: Welcome },
    { path: "/uploadLK", name: "uploadLK", component: UploadFileVue },
    { path: "/uploadCK", name: "uploadCK", component: UploadFileVue },
    {
        path: "/uploadUsercase",
        name: "uploadUsercase",
        children: [
            {
                path: 'upload',
                name: 'usercaseUpload',
                component: UploadFileVue,

            },
            {
                path: 'setWeight',
                name: 'usercaseSetweight',
                component: UsercaseWeightVue
            }

        ],
        component: UploadUsercaseVue
    },
    { path: '/messageFlow', name: 'messageFlow', component: UploadFileVue},
    { path: "/LKResult", name: "LKResult", component: LKResultVue },
    { path: "/CKResult", name: "CKResult", component: CKResultVue },
    { path: "/messageFlowResult", name: "messageFlowResult", component: MessageFlowResultVue }

]

// RouterOptions是路由选项类型
const options: RouterOptions = {
    history: createWebHashHistory(),
    routes,
}

// Router是路由对象类型
const router: Router = createRouter(options)

export default router

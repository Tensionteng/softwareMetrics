import { defineStore } from 'pinia'
import { LKResult, CKResult, messageFlow, messageFlowMoudle, usercaseGraph } from '../result/type/type'
import { ref } from 'vue'

const useLKResultStore = defineStore("LKResult", () => {
    let data: LKResult[] = ref([]) as unknown as LKResult[]
    function changeLK(params: LKResult[]) {
        data = params
    }
    function getLK() { return data }
    return { changeLK, getLK }
})

const useCKResultStore = defineStore("CKResult", () => {
    let data: CKResult[] = ref([]) as unknown as CKResult[]
    function changeCK(params: CKResult[]) {
        data = params
    }
    function getCK() { return data }
    return { changeCK, getCK }
})

const useUsercaseStore = defineStore('usercase', () => {
    let data: usercaseGraph = ref([]) as unknown as usercaseGraph
    function changeUsercase(params: usercaseGraph) {
        data = params
    }
    function getUsercase() { return data }

    return { changeUsercase, getUsercase }
})

const useMessageFlowStore = defineStore('messageFlow', () => {
    let data: messageFlow = ref([]) as unknown as messageFlow

    function changeMessageFlow(params: messageFlow) {
        data = params
    }
    function getMessageMoudle() { return data }
    return { changeMessageFlow, getMessageMoudle }
})



export { useLKResultStore, useCKResultStore, useMessageFlowStore, useUsercaseStore }
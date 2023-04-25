import { defineStore } from 'pinia'
import { LKResult, CKResult } from '../result/type/type'
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

export { useLKResultStore, useCKResultStore }
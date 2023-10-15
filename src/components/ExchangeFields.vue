<template>
    <div>
        <div class="md:flex justify-between relative">
            <Loader v-if="load" />
            <div class="w-full">
                <label class="text-xs text-gray-500">Я продаю</label>
                <div class="relative">
                    <div class="absolute top-0 right-0 h-full w-10 flex justify-center items-center">
                        <img :src="getImageByName(sideSell.selected, sideSell.items)" class="w-6">
                    </div>
                    <input type="text" placeholder="Продажа" class="w-full bg-gray-300 border-0 outline-none rounded" v-model="sideSell.val" 
                    @input="countCourseInput(sideSell, sideBuy)">
                </div>
                <CurrencyList :side="sideSell" @changeSelected="changeSelected($event, sideSell)" />
            </div>
            <div class="text-center pt-2 md:pt-7">
                <button class="h-8 w-8 bg-primary text-white rounded-full mx-2" @click="exchangeSides">
                    <span class="mdi mdi-swap-horizontal"></span>
                </button>
            </div>
            <div class="w-full">
                <label class="text-xs text-gray-500">Я покупаю</label>
                <div class="relative">
                    <div class="absolute top-0 right-0 h-full w-10 flex justify-center items-center">
                        <img :src="getImageByName(sideBuy.selected, sideBuy.items)" class="w-6">
                    </div>
                    <input type="text" placeholder="Покупка" class="w-full bg-gray-300 border-0 outline-none rounded" v-model="sideBuy.val" 
                    @input="countCourseInput(sideBuy, sideSell)">
                </div>
                <CurrencyList :side="sideBuy" @changeSelected="changeSelected($event, sideBuy)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCryptoStore } from '@/stores/crypto'
import CurrencyList from '@/components/CurrencyList.vue'
import Loader from '@/components/Loader.vue'
import { CryptoType, SideType } from '@/types/currency'
import { stringWithFloatNumber } from "@/helpers/txtWorkshop"

export default defineComponent({
    components: {
        CurrencyList,
        Loader
    },
    data(){
        return {
            cryptoStore: useCryptoStore(),
            load: false,
            course: '',
            sideSell: {
                selected: 'Сбербанк', 
                val: '',
                items: [],
                type: 'bank'
            } as SideType,
            sideBuy: {
                selected: 'USDT', 
                val: '',
                items: [],
                type: 'crypto'
            } as SideType
        }
    },
    computed: {
        currencies(){
            return useCryptoStore().currencies
        }
    },
    watch: {
        currencies: {
            handler(){
                this.setSides()
            },
            deep: true
        }
    },
    methods: {
        // определяющая функция
        countCourseInput(from: SideType, to: SideType){
            from.val = stringWithFloatNumber(from.val)
            if(from.val == ''){
                this.refreshFields()
                return
            }
            const course = parseFloat(this.course)
            const amount = parseFloat(from.val)
            if(from.type === 'crypto'){
                to.val = (amount * course).toFixed(2)
            }else{
                to.val = (amount / course).toFixed(7)
            }
        },
        changeSelected(payload: {type: string, name: string}, side: SideType){
            // this.refreshFields()
            side.selected = payload.name
            if(payload.type === 'crypto'){
                this.course = '*****'
                this.load = true
                useCryptoStore().LOAD_COURSE(payload.name).then((res) => {
                    this.course = res.asks[0].price
                    this.load = false
                    this.countCourseInput(this.sideSell, this.sideBuy)
                })
            }
        },
        refreshFields(){
            this.sideSell.val = ''
            this.sideBuy.val = ''
        },
        setSides(){
            this.course = '*****'
            this.load = true
            this.sideBuy.items = this.currencies
            this.sideSell.items = this.cryptoStore.banks
            useCryptoStore().LOAD_COURSE(this.sideBuy.selected).then((res) => {
                this.course = res.asks[0].price
                this.load = false
            })
        },
        // helpers
        exchangeSides(){
            const nv = {...this.sideSell}
            this.sideSell = this.sideBuy
            this.sideBuy = nv
        },
        getImageByName(name: string, items: CryptoType[]){
            if(!items.length){
                return ''
            }
            const res = items.find((i: CryptoType) => i.name === name)
            return res?.img
        }
    }
})
</script>
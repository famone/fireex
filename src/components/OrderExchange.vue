<template>
  <div class="mt-4 p-4 rounded-lg bg-gray-100">
    <h2 class="text-xl mb-4 font-medium">
      💳 Ваши реквизиты
    </h2>
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-4">
        <input
          type="text"
          placeholder="ФИО отправителя"
          :class="inputClass"
        >
      </div>
      <div class="col-span-4 md:col-span-2">
        <input
          v-maska
          type="text"
          placeholder="Номер карты (16-18 цифр)"
          :class="inputClass"
          data-maska="#### #### #### #### ####"
        >
      </div>
      <div class="col-span-4 md:col-span-2">
        <input
          type="text"
          placeholder="Ваш e-mail"
          :class="inputClass"
        >
      </div>
      <div class="col-span-4">
        <input
          type="text"
          :placeholder="`Номер кошелька ${cryptoStore.market}`"
          :class="inputClass"
        >
      </div>
    </div>
    <div class="flex flex-wrap items-center mt-4">
      <div class="relative flex gap-x-3 md:order-2 mb-4 md:mb-0">
        <div class="flex h-6 items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-0"
          >
        </div>
        <div class="text-sm leading-5">
          <label
            for="comments"
            class="text-gray-500"
          >Я соглашаюсь с правилами обмена и с политикой <br class="hidden md:block"> криптообменника FIREEX</label>
        </div>
      </div>
      <button class="rounded whitespace-nowrap bg-primary px-8 py-4 text-white md:mr-4 text-lg font-semibold  hover:bg-blue-500 md:order-1 w-full md:w-fit">
        Создать заявку
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { vMaska } from "maska"
import { useCryptoStore } from '@/stores/crypto'

export default defineComponent({
    directives: { maska: vMaska },
    data(){
        return {
            inputClass: 'w-full bg-white border-0 outline-none rounded py-4 px-4',
            cryptoStore: useCryptoStore()
        }
    }
})
</script>
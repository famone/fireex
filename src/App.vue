<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useCryptoStore } from '@/stores/crypto'

export default defineComponent({
    beforeCreate(){
        useCryptoStore().LOAD_CURRENCIES()
    }
})
</script>
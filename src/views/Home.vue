<template>
<section class="py-8 bg-[#f9f5f1] sm:w-[650px] px-4 sm:px-0 mx-auto">
    <Header />
    <Stat />
    <ExchangeFields />
    <OrderExchange />
    <Footer />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import ExchangeFields from '@/components/ExchangeFields.vue'
import OrderExchange from '@/components/OrderExchange.vue'
import Stat from '@/components/Stat.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
    components: {
        Header,
        ExchangeFields,
        OrderExchange,
        Stat,
        Footer
    }
})
</script>
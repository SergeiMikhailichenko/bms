
<template>
    <div class="border-gray/10 border-t bg-gray/2 py-[32px]">
        <div class="flex justify-center">
            <div class="px-[16px] md:px-[32px] flex justify-start text-[32px] md:text-[48px] text-secondary font-bold w-full max-w-[1280px]">
                Вендоры и партнеры
            </div>
        </div>
        <div class="relative pt-[32px] md:pt-[64px] px-[16px] md:px-[32px] flex justify-center">
            <!-- Карточки -->
            <div class="grid grid-cols-2 md:grid-cols-6 w-full gap-[12px] max-w-[1248px] md:max-w-[1216px]">
              <div 
                v-for="(value, index) in partners"
                :key="index"
                class="flex justify-center items-center w-full h-[70px] md:h-[80px] text-gray font-bold text-[14px] border border-secondary/10 rounded-[20px] bg-gradient-to-t from-background/30 to-gray/5"
              >
                {{ value }}
              </div>

            </div>
        </div>        
    </div>
</template>

<script setup>
import { partners } from '@/other/partners'



</script>

<style scoped>
</style>
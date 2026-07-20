
<template>
    <div class="relative pt-[64px] flex justify-center">
        <div class="flex not-md:flex-wrap-reverse w-full max-w-[1280px] h-fit md:h-[500px] overflow-hidden">
            <!-- Текстовый блок -->
            <div class="relative md:flex-1/3 w-full h-full not-md:flex-wrap-reverse">
                <!-- Мелкий значек -->
                <div class="relative flex content-center items-start justify-start pt-[36px] px-[16px] md:px-[32px] mb-4 z-10">
                    <div class="flex justify-center items-center gap-[12px]">
                        <div class="flex justify-center items-center h-[40px] w-[40px] rounded-[12px] border bg-orange/10">
                            <img class="h-[20px] w-[20px]" :src="iconLink" alt="smarthome">
                        </div>
                        <h2 class="text-[12px] md:text-[16px] text-orange font-bold">{{ subTitle }}</h2>
                    </div>
                </div>
                <!-- Титул -->
                <div class="relative flex flex-col items-start justify-start px-[16px] md:px-[32px] mb-4 z-10">
                    <div class="text-[16px] md:text-[26px] max-w-[200px] md:max-w-[400px] font-bold text-secondary mb-4">
                        {{ title }}
                    </div>
    
                    <div class="relative flex flex-col content-center items-start justify-start z-10">
                        <div
                            v-for="(element, index) in props.textArray"
                            :key="index"
                            class="flex justify-center items-start gap-[12px]">
                            <div class="flex justify-center items-center h-[24px] w-[24px] shrink-0">
                                <img class="h-[18px] w-[16px]" :src="checkmark" alt="checkmark">
                            </div>
                            <h2 class="text-[12px] md:text-[16px] text-gray">{{ element }}</h2>
                        </div>
                    </div>
                </div>
                <!-- Кнопка -->
                 <div class="relative md:absolute left-0 bottom-0 mx-[16px] md:mx-[32px] flex h-[44px] md:w-[144px] items-center justify-center rounded-[8px] md:rounded-[12px] border border-white/15 bg-white/5 backdrop-blur-md text-white transition hover:bg-white/10 hover:border-orange/80 cursor-pointer z-40">
                    Подробнее
                </div>
                <!-- <div class="absolute left-0 mx-[16px] md:mx-[32px] bottom-0 flex justify-center items-center w-[144px] h-[44px] rounded-[12px] bg-orange/10 bg-background border border-accent z-40 text-secondary">Подробнее</div> -->
            </div>
            <!-- Блок картинки -->
            <div class="relative md:flex-2/3 w-full mx-[16px] md:mx-0 h-[220px] md:h-full">
                <img :src="imageLink" alt="" class="block w-full h-full object-cover object-center">
                <!-- Затемнение снизу -->
                <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
                <!-- Слева и справа  -->
                <div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
            </div>
                










    
       
        </div>
    </div>
</template>





<script setup>
import { computed } from 'vue';
const props = defineProps({
    icon: String,
    title: String,
    subTitle: String,
    image: String,
    textArray: Array,
    nameRoute: String,
})

const imageLink = computed(() =>
  new URL(`/src/assets/images/${props.image}`, import.meta.url).href
)
const iconLink = computed(() =>
  new URL(`/src/assets/icons/${props.icon}`, import.meta.url).href
)
const checkmark = computed(() =>
  new URL(`/src/assets/icons/checkmark.svg`, import.meta.url).href
)
</script>

<style scoped>
</style>
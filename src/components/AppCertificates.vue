
<template>
    <div class="border-gray/10 border-t bg-gray/2 py-[32px]">
        <div class="flex justify-center">
            <div class="px-[16px] md:px-[32px] flex justify-start text-[32px] md:text-[48px] text-secondary font-bold w-full max-w-[1280px]">
                Сертификаты ({{ certificates.length }})
            </div>
        </div>
        <div class="relative pt-[32px] md:pt-[64px] flex justify-center">
            <!-- Список сертификатов -->
            <div class="flex max-w-[1280px] px-[16px] md:px-[32px] overflow-x-auto overflow-y-hidden gap-[12px]">
                <div
                    v-for="value in certificates"
                    :key="value.url"
                    @click="openImage(value)"
                    class="h-[204px] w-[150px] shrink-0 rounded-[12px] overflow-hidden">
                    <img
                        class="w-full h-full object-cover transition duration-300 hover:scale-105" 
                        :src="value.url" :alt="value.info">
                </div>
            </div>
        </div>
        <!-- Модальное окно -->
        <Transition name="fade">
            <div
                v-if="selectedImage"
                class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                @click="closeImage"
            >
                <img
                :src="selectedImage.url"
                :alt="selectedImage.info"
                class="max-w-full max-h-full object-contain rounded-lg"
                >
          </div>
        </Transition>
    </div>
</template>





<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { certificates } from '@/assets/certificates'

const selectedImage = ref(null)

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}

const handleKey = (e) => {
  if (e.key === 'Escape') {
    closeImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})


</script>

<style scoped>
</style>
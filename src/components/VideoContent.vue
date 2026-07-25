
<template>
    <div class="pt-[64px] flex justify-center">
    <div class="relative w-full max-w-[1280px] rounded-[24px] overflow-hidden">
        <video class="block w-full object-cover"
                autoplay
                muted
                loop
                playsinline
            >
                <source :src="video" type="video/mp4" />
            </video>

    <!-- Слева и справа -->
    <div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
    <!-- Затемнение снизу -->
    <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>

        <div class="absolute inset-0 flex flex-col items-center items-start justify-end px-[16px] md:px-[32px] pb-[40px] md:pb-[100px] justify-center z-10">
            <h1 class="text-[20px] md:text-[40px] font-bold text-secondary whitespace-pre-line">
                <!-- «Инженерная мысль -<br>как отдельный вид искусства» -->
                {{ props.text }}
            </h1>
        </div>
    </div>
</div>
</template>




<script setup>
const props = defineProps({
    text: String,
    video: String,
})

</script>
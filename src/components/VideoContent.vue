
<template>
    <div class="pt-[64px] flex justify-center">
    <div class="relative w-full max-w-[1280px] rounded-[24px] overflow-hidden">
        <video class="block w-full object-cover"
                autoplay
                muted
                loop
                playsinline
            >
                <source src="@/assets/videos/v1.mp4" type="video/mp4" />
            </video>

    <!-- Слева и справа -->
    <div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
    <!-- Затемнение снизу -->
    <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>

        <div class="absolute inset-0 flex flex-col items-center items-start justify-end px-[16px] md:px-[32px] mb-4 justify-center z-10">
            <h1 class="text-[32px] md:text-[60px] font-bold text-secondary">
                «Инженерная мысль -
            </h1>

            <p class="mt-0 md:mt-[13px] text-[24px] md:text-[20px] font-bold text-secondary">
                как отдельный вид искусства»
            </p>
        </div>
    </div>
</div>
</template>




<script setup>
</script>
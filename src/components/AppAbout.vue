
<template>
    <div class="border-gray/10 border-t bg-gray/2 py-[32px]">
        <div class="flex justify-center">
            <div class="px-[16px] md:px-[32px] flex justify-start text-[32px] md:text-[48px] text-secondary font-bold w-full max-w-[1280px]">
                О нас
            </div>
        </div>
        <div class="relative pt-[32px] md:pt-[64px] flex justify-center">
            <div class="mg:grid mg:grid-cols-2 gap-[12px] md:gap-[24px] w-full max-w-[1280px] px-[16px] md:px-[32px]">
                <!-- 1 бокс -->
                <div class="h-fit md:h-[222px] rounded-[24px] border border-secondary/10 p-[16px] md:p-[40px] bg-gradient-to-t from-background/30 to-gray/5">
                    <div class="text-secondary font-bold text-[16px] md:text-[20px]">Миссия</div>
                    <div class="text-gray mt-[16px] text-[14px] md:text-[16px]">Делать высокотехнологичные инженерные системы доступными и невидимыми — чтобы технологии служили человеку, а не наоборот. Создавать пространства, в которых хочется жить и работать.</div>
                </div>
                <!-- 2 бокс -->
                <div class="h-fit md:h-[222px] rounded-[24px] border border-secondary/10 mt-[16px] p-[16px] md:p-[40px] bg-gradient-to-t from-background/30 to-gray/5">
                    <div class="text-secondary font-bold text-[16px] md:text-[20px]">Философия</div>
                    <div class="text-gray mt-[16px] text-[14px] md:text-[16px]">Мы относимся к каждому объекту как к произведению инженерного искусства. Чистая документация, аккуратный монтаж, продуманные сценарии — это и есть наш почерк.</div>
                </div>
                <!-- 3 бокс -->
                <div class="h-fit rounded-[24px] border border-secondary/10 mt-[16px] p-[16px] md:p-[40px] col-span-2 bg-gradient-to-t from-background/30 to-gray/5">
                    <div class="text-secondary font-bold text-[20px]">Конкурентные преимущества</div>
                    <div class="md:grid md:grid-cols-2 gap-[12px] mt-[24px]">
                        <!-- 1 колонка -->
                        <div class="relative flex flex-col content-center items-start justify-start gap-[10px] z-10">
                            <div
                                v-for="(value, index) in firstCol"
                                :key="index" 
                                class="flex justify-center items-start gap-[12px]"
                                >
                                <div class="flex justify-center items-center h-[24px] w-[24px] rounded-[12px] bg-accent/10 shrink-0">
                                    <img class="h-[18px] w-[16px]" src="@/assets/icons/checkmark.svg" alt="checkmark">
                                </div>
                                <h2 class="text-[14px] md:text-[16px] text-gray">{{ value }}</h2>
                            </div>
                        </div>
                        <!-- 2 колонка -->
                        <div class="relative flex flex-col content-center items-start justify-start gap-[10px] z-10">
                            <div
                                v-for="(value, index) in secondCol"
                                :key="index" 
                                class="flex justify-center items-start gap-[12px]"
                                >
                                <div class="flex justify-center items-center h-[24px] w-[24px] rounded-[12px] bg-accent/10 shrink-0">
                                    <img class="h-[18px] w-[16px]" src="@/assets/icons/checkmark.svg" alt="checkmark">
                                </div>
                                <h2 class="text-[14px] md:text-[16px] text-gray">{{ value }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>





<script setup>
const firstCol = 
    [
        'Сертифицированные инженеры с опытом 10+ лет',
        'Авторский надзор и сопровождение на всех этапах',

    ];
const secondCol = 
    [
        'Лицензированное оборудование от ведущих производителей',
        'Гарантия и сервисное обслуживание после сдачи',
    ];
</script>

<style scoped>
</style>
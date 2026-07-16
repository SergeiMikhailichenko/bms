<template>
    <header class="md:flex bg-background fixed w-full z-50 md:justify-center">
        <nav class="flex relative items-center justify-center h-[64px] px-[8px] md:px-[32px] md:justify-between border-b border-gray/20 max-w-[1280px] w-full">
            <!-- Бургер меню -->
            <div @click="toggle" :class="isOpen ? 'border-orange' : 'border-accent'" class="relative inline-flex items-center border-1 justify-center rounded-md p-2 text-gray hover:bg-gray/10 hover:text-secondary md:hidden cursor-pointer">
                <svg v-if="!isOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>

            <!-- Логотип -->
            <div 
              @click="navigate('Home')"
              class="flex not-md:flex-1 justify-center not-md:ml-[-40px] md:flex-0.5 text-secondary left-0 text-[20px] font-semibold px-[12px] py-[8px] rounded-[6px] cursor-pointer ">
              BMS-project
            </div>
          <!-- Меню -->
          <div class="flex flex-1 justify-center items-center content-center gap-[32px] text-gray text-[14px] not-md:hidden">
            <a v-for="element in menu"
                :key="element.link"
                @click="navigate(element.link)"
                class="px-[12px] py-[8px] rounded-[8px] hover:text-orange hover:bg-gray/10 transition-colors duration-200 cursor-pointer"
            >
                {{ element.name }}
            </a>
          </div>

        </nav>
        <!-- Выпадающее меню -->
        <div v-show="isOpen" class="md:hidden">
            <!-- Оверлей -->
            <div
                @click="toggle" 
                class="fixed inset-0 top-[64px] backdrop-blur-[20px] z-40">
            </div>
            
            <!-- Меню -->
            <div class="relative px-[4px] pb-[12px] bg-background z-50 shadow-lg">
                <a v-for="element in menu"
                    :key="element.link"
                    @click="navigate(element.link)"
                    class="block px-3 py-2 text-secondary font-medium hover:rounded-[8px] hover:text-orange hover:bg-gray/10 cursor-pointer"
                >
                    {{ element.name }}
                </a>
            </div>
        </div>
        
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const navigate = (target) => router.push({name: target});
const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
}

const menu = ref([
    { 
        name: 'Услуги',
        link: '',
    },
    { 
        name: 'О нас',
        link: '',
    },
    { 
        name: 'Как работаем',
        link: '',
    },
    { 
        name: 'Команда',
        link: '',
    },
    { 
        name: 'Отзывы',
        link: '',
    },
]);

</script>
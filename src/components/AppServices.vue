<template>
    <!-- Наши услуги -->
    <div class="border-gray/10 border-t py-[32px]">
        <div class="flex justify-center">
            <div class="px-[16px] md:px-[32px] flex justify-start text-[32px] md:text-[48px] text-secondary font-bold w-full max-w-[1280px]">
            Наши услуги
            </div>
        </div>
        <div class="mt-[4px] md:mt-[13px] flex justify-center">
            <div class="flex justify-start px-[16px] md:px-[32px] text-[14px] md:text-[16px] text-gray w-full max-w-[1280px]">
                <div class="max-w-[500px]">
                Полный цикл инженерных решений — от концепции и проектирования до пусконаладки и сервиса.
                </div>
            </div>
        </div>
        <BigCard 
            :icon="smartHome.icon" 
            :title="smartHome.title"
            :sub-title="smartHome.subTitle"
            :image="smartHome.image" 
            :text-array="smartHome.description"
        />
        <BigCard 
            :icon="multimediaSystem.icon" 
            :title="multimediaSystem.title"
            :sub-title="multimediaSystem.subTitle"
            :image="multimediaSystem.image" 
            :text-array="multimediaSystem.description"
        />
        <BigCard 
            :icon="infrastructure.icon" 
            :title="infrastructure.title"
            :sub-title="infrastructure.subTitle"
            :image="infrastructure.image" 
            :text-array="infrastructure.description"
        />
        <BigCard 
            :icon="monitoring.icon" 
            :title="monitoring.title"
            :sub-title="monitoring.subTitle"
            :image="monitoring.image" 
            :text-array="monitoring.description"
        />
    </div>
</template>

<script setup>
import BigCard from './BigCard.vue';

const smartHome = {
  icon: 'home.svg',
  title: 'Система домашней автоматизации',
  subTitle: 'Умный дом',
  image: 'smart-home.jpeg',
  description:[
    'Визуализация и система управления',
    'Автоматизация освещения',
    'Автоматизация приводов штор',
    'Автоматизация отопления и теплых полов',
    'Автоматизация вентиляции и кондиционирования',
    'Автоматизация системы увлажнения',
  ]
};

const multimediaSystem = {
  icon: 'tv.svg',
  title: 'Слаботочные системы и системы безопасности',
  subTitle: 'Звук и видео',
  image: 'jbl.jpg',
  description: [
    'Домашний кинотеатр',
    'Светодиодные LED панели',
    'Hi-Fi и Hi-End аудиосистемы',
    'Профессиональные системы караоке',
    'Профессиональная озвучка'
  ]
};
const infrastructure = {
  icon: 'infrastructure.svg',
  title: 'Слаботочные системы и системы безопасности',
  subTitle: 'Инфраструктура',
  image: 'network.jpeg',
  description: [
    'Охранно-пожарная сигнализация',
    'Видеонаблюдение',
    'Локальная компьютерная и Wi-Fi сеть',
    'Домофония и система контроля доступа',
    'Система защиты от затопления',
    'Периметральная охрана'
  ]
};
const monitoring = {
  icon: 'monitoring.svg',
  title: 'Системы диспетчеризации',
  subTitle: 'Мониторинг и контроль',
  image: 'beckhoff.jpeg',
  description: [
    'Диспетчеризация котельного оборудования',
    'Диспетчеризация систем общеобменной вентиляции и кондиционирования',
    'Диспетчеризация системы электроснабжения',
    'Диспетчеризация гидротехнического оборудования (Бассейн, джакузи, сауна, хамам)',
    'Система сбора расхода энергоресурсов',
  ]
};
</script>
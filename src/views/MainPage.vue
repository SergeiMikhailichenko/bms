<script setup>
import NavBar from '@/components/NavBar.vue';
import VideoContent from '@/components/VideoContent.vue';
import BigCard from '@/components/BigCard.vue';

const smartHomeText = [
  'Визуализация и система управления',
  'Автоматизация освещения',
  'Автоматизация приводов штор',
  'Автоматизация отопления и теплых полов',
  'Автоматизация вентиляции и кондиционирования',
  'Автоматизация системы увлажнения',
];

const multimediaSystemText = [
  'Домашний кинотеатр',
  'Светодиодные LED панели',
  'Hi-Fi и Hi-End аудиосистемы',
  'Профессиональные системы караоке',
  'Профессиональная озвучка'
];
</script>

<template>
  <NavBar />
  <VideoContent />
  <div class="pt-[32px] flex justify-center">
    <div class="px-[16px] md:px-[32px] flex justify-start text-[32px] md:text-[48px] text-secondary font-bold w-full max-w-[1280px]">
      Наши услуги
    </div>
  </div>
  <div class="mt-[4px] md:mt-[13px] flex justify-center">
      <div class="flex justify-start px-[16px] md:px-[32px] text-[12px] md:text-[16px] text-gray w-full max-w-[1280px]">
        <div class="max-w-[500px]">
          Полный цикл инженерных решений — от концепции и проектирования до пусконаладки и сервиса.
        </div>
      </div>
  </div>
  <BigCard 
    :icon="'home.svg'" 
    :title="'Система домашней автоматизации'"
    :sub-title="'Умный дом'"
    :image="'smart-home.jpeg'" 
    :text-array="smartHomeText"
  />
  <BigCard 
    :icon="'tv.svg'" 
    :title="'Мультимедиа системы'"
    :sub-title="'Звук и видео'"
    :image="'jbl.jpg'" 
    :text-array="multimediaSystemText"
  />
</template>

<style scoped></style>

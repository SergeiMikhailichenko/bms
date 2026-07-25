<script setup>
import NavBar from '@/components/NavBar.vue';
import VideoContent from '@/components/VideoContent.vue';
import AppFooter from '@/components/AppFooter.vue';

import videoSmartHome from '@/assets/videos/v2.mp4'
import { faq, contentText } from '@/other/smarthome';

import { ref } from 'vue'



const active = ref(0)

</script>

<template>
  <NavBar />
  <VideoContent 
    :video="videoSmartHome"
    :text="'Система домашней автоматизации\nУмный дом'"
  />
  <div class="py-[32px]">
    <div 
      v-for="value in contentText"
      :key="value"
      class="text-gray max-w-[1280px] mx-auto my-[12px] px-[16px] lg:px-[32px]">
      {{ value }}
    </div>

  </div>

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-[1280px] py-[32px] mx-auto px-[16px] lg:px-[32px]">
      <!-- Левая карточка -->
      <div class="rounded-3xl border border-secondary/10 bg-gray/5 p-8">
          <h3 class="mb-6 text-2xl font-bold text-secondary">
              Направление
          </h3>
          <div class="space-y-2">
              <button
                  v-for="(item,index) in faq"
                  :key="item.title"
                  @mouseenter="active=index"
                  @click="active=index"
                  class="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300"
                  :class="active===index
                      ? 'bg-accent text-background'
                      : 'text-gray hover:bg-white/5 hover:text-secondary'"
              >
                  <div
                      class="h-2 w-2 rounded-full"
                      :class="active===index
                          ? 'bg-background'
                          : 'bg-accent'"
                  ></div>

                  {{ item.title }}

              </button>

          </div>

      </div>

      <!-- Задача -->
      <Transition name="fade" mode="out-in">

          <div
              :key="'task'+active"
              class="rounded-3xl border border-secondary/10 bg-gray/5 p-8"
          >

              <div class="mb-4 text-2xl font-bold text-secondary">
                  Задача
              </div>

              <p class="leading-8 text-gray">
                  {{ faq[active].task }}
              </p>

          </div>

      </Transition>

      <!-- Решение -->
      <Transition name="fade" mode="out-in">

          <div
              :key="'solution'+active"
              class="rounded-3xl border border-secondary/10 bg-gray/5 p-8"
          >

              <div class="mb-4 text-2xl font-bold text-secondary">
                  Решение
              </div>

              <p class="leading-8 text-gray">
                  {{ faq[active].solution }}
              </p>

          </div>

      </Transition>

  </div>






  <AppFooter />

</template>

<style scoped></style>

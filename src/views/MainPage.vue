<script setup>
import NavBar from '@/components/NavBar.vue';
import VideoContent from '@/components/VideoContent.vue';
import BigCard from '@/components/BigCard.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppServices from '@/components/AppServices.vue';

</script>

<template>
  <NavBar />
  <VideoContent />
  <AppServices />
  <AppAbout />

  <div class="h-[100px]"></div>
  <AppFooter />
</template>

<style scoped></style>

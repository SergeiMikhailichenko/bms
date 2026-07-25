<script setup>
import NavBar from '@/components/NavBar.vue';
import VideoContent from '@/components/VideoContent.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppServices from '@/components/AppServices.vue';
import AppCertificates from '@/components/AppCertificates.vue';
import AppPartners from '@/components/AppPartners.vue';
import AppAbout2 from '@/components/AppAbout2.vue';

import videoHome from '@/assets/videos/v1.mp4'

</script>

<template>
  <NavBar />
  <VideoContent 
    :video="videoHome"
    :text="'«Инженерная мысль - \nкак отдельный вид искусства»'"
  />
  <AppServices />
  <AppAbout />
  <AppAbout2 />
  <AppCertificates />
  <AppPartners />
  <AppFooter />

</template>

<style scoped></style>

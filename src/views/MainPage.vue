<script setup>
import NavBar from '@/components/NavBar.vue';
import VideoContent from '@/components/VideoContent.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppServices from '@/components/AppServices.vue';
import AppCertificates from '@/components/AppCertificates.vue';
import AppPartners from '@/components/AppPartners.vue';

</script>

<template>
  <NavBar />
  <VideoContent />
  <AppServices />
  <AppAbout />
  <AppCertificates />
  <AppPartners />
  <div class="h-[100px]"></div>
  <AppFooter />

</template>

<style scoped></style>

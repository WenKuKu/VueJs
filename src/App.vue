<template>
  <div class="flex h-screen w-full">
    <!-- navbar -->
    <section class="flex  ">
      <div><NavbarIcon></NavbarIcon></div>
    </section>
    <!-- headbar -->
    <section class="flex flex-col w-full h-full">
      <nav class="w-full h-24 flex flex-col ">
        <div><ProFile></ProFile></div>
      </nav>
      <!-- router view-->
      <div class="h-full overflow-auto ">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script setup>
import NavbarIcon from "./components/NavbarIcon.vue";
import ProFile from "./components/ProFile.vue";
</script>

<style></style>

<template>
  <div>
    <top-header />
    <primary-menu />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import TopHeader from "../components/TopHeader.vue";
import PrimaryMenu from "@/components/PrimaryMenu.vue";
</script>

<style scoped></style>

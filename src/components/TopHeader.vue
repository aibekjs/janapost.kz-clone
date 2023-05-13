<template>
  <div class="bg-default text-white py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="pointer">
        <span>+7 727 349 97 40</span>
      </div>
      <div class="d-flex">
        <div class="pointer">
          <font-awesome-icon :icon="['fas', 'globe']" />
          <span class="ms-1">English</span>
        </div>
        <div class="ms-4 pointer">
          <font-awesome-icon :icon="['fas', 'user']" />
          <span class="ms-1">My order</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../assets/css/styles.css";
</script>

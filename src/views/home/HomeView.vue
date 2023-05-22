<template>
  <div class="container-fluid pt-5 bg-primary">
    <div class="row">
      <div class="col-6" style="padding: 100px 0 0 100px">
        <hero-text />
        <primary-button class="pt-5" />
      </div>
      <div class="col-6">
        <img
          src="@/assets/images/hero-img1.png"
          alt="img"
          style="width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "@/components/PrimaryButton.vue";
import HeroText from "@/components/HeroText.vue";
</script>

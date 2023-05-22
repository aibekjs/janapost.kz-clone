<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner pt-5">
      <div class="carousel-item active bg-primary" data-bs-interval="3000">
        <div class="row">
          <div class="col-6" style="padding: 100px 0 0 100px">
            <hero-text />
            <primary-button class="pt-5" />
          </div>
          <div class="col-6">
            <img
              src="@/assets/images/hero-img1.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div class="carousel-item bg-danger" data-bs-interval="3000">
        <div class="row">
          <div class="col-6" style="padding: 100px 0 0 100px">
            <hero-text />
            <primary-button class="pt-5" />
          </div>
          <div class="col-6">
            <img
              src="@/assets/images/hero-img1.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "@/components/PrimaryButton.vue";
import HeroText from "@/components/HeroText.vue";
</script>

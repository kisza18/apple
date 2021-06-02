<template>
  <div
    class="relative h-sm lg:h-Lsm bg-white w-full"
    :style="{ zIndex: index }"
  >
    <div class="relative z-10 h-full overflow-hidden">
      <!--text wrapper-->
      <div class="absolute top-0 z-10 w-full text-center pt-8 md:pt-10">
        <div class="w-full flex justify-center">
          <img
            class="hidden mb-2"
            :style="{ display: hide }"
            :src="require(`../assets/images/${imageUrl}`)"
            alt=""
          />
        </div>
        <h4
          class="text-3xl font-semibold lg:text-4xl"
          :style="{ color: textColor }"
        >
          {{ title }}
        </h4>
        <h5
          class="text-lg mt-1 lg:text-xl lg:mx-36 md:mx-20"
          :style="{ color: textColor }"
        >
          {{ text }}
        </h5>
        <div class="cta-links text-blue-400 mt-2 text-md md:text-lg lg:text-xl">
          <a class="hover:underline" href="info"
            >További információ<i class="fal fa-chevron-right text-xs ml-1"></i
          ></a>
          <a class="ml-7 hover:underline" href="shop"
            >Vásárlás<i class="fal fa-chevron-right text-xs ml-1"></i
          ></a>
        </div>
      </div>
      <!-- image wrapper -->
      <div class="absolute w-full flex justify-center">
        <img
          class="imageSmall absolute -top-12 z-0 overflow-hidden md:hidden"
          :src="require(`../assets/images/${imageUrlSmall}`)"
          alt=""
        />
        <img
          class="imageMedium absolute z-0 overflow-hidden hidden md:block lg:hidden"
          :src="require(`../assets/images/${imageUrlMedium}`)"
          alt=""
        />
        <img
          class="imageLarge absolute z-0 overflow-hidden hidden lg:block"
          :src="require(`../assets/images/${imageUrlLarge}`)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "imageUrl",
    "hide",
    "index",
    "title",
    "text",
    "textColor",
    "imageUrlSmall",
    "imageUrlMedium",
    "imageUrlLarge",
  ],
  name: "TheSectionGrid",
};
</script>

<style scoped>
.imageSmall {
  min-width: 734px;
  height: 560px;
}
.imageMedium {
  min-width: 516px;
  height: 510px;
}
.imageLarge {
  min-width: 1260px;
  height: 594px;
}
</style>

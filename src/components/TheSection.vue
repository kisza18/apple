<template>
  <div
    class="relative h-sm md:h-md lg:h-lg bg-white w-full"
    :style="{ zIndex: index }"
  >
    <div class="relative z-10 h-full overflow-hidden">
      <!--text wrapper-->
      <div class="absolute top-0 z-10 w-full text-center pt-8 md:pt-16">
        <h4
          class="text-3xl font-semibold md:text-5xl lg:text-6xl"
          :style="{ color: textColor }"
        >
          {{ title }}
        </h4>
        <h5
          class="text-lg mt-1 md:text-2xl md:mt-2 lg:text-3xl"
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
          class="imageSmall absolute -top-16 z-0 overflow-hidden md:hidden"
          :src="require(`../assets/images/${imageUrlSmall}`)"
          alt=""
        />
        <img
          class="imageMedium absolute -top-14 z-0 overflow-hidden hidden md:block lg:hidden"
          :src="require(`../assets/images/${imageUrlMedium}`)"
          alt=""
        />
        <img
          class="imageLarge absolute -top-10 z-0 overflow-hidden hidden lg:block"
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
    "index",
    "title",
    "text",
    "textColor",
    "imageUrlSmall",
    "imageUrlMedium",
    "imageUrlLarge",
  ],
  name: "TheSection",
};
</script>

<style scoped>
.imageSmall {
  min-width: 734px;
  height: 560px;
}
.imageMedium {
  min-width: 1068px;
  height: 698px;
}
.imageLarge {
  min-width: 3008px;
  height: 738px;
}
</style>

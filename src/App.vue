<template>
  <TheNavbar />
  <onlineShop />
  <TheSection
    index="9"
    title="iPad Pro"
    text="Az Apple M1 chip szuperképességeivel."
    textColor="#f5f5f7"
    imageUrlSmall="ipad_pro_small.jpg"
    imageUrlMedium="ipad_pro_medium.jpg"
    imageUrlLarge="ipad_pro_large.jpg"
  />
  <TheSection
    index="8"
    title="iPhone 12"
    text="Elit brigád."
    textColor="#1d1d1f"
    imageUrlSmall="iphone12_small.jpg"
    imageUrlMedium="iphone12_medium.jpg"
    imageUrlLarge="iphone12_large.jpg"
  />
  <TheSection
    index="7"
    title="iMac"
    text="Színre lép."
    textColor="#1d1d1f"
    imageUrlSmall="imac_small.jpg"
    imageUrlMedium="imac_medium.jpg"
    imageUrlLarge="imac_large.jpg"
  />
  <div class="grid grid-cols-1 md:grid-cols-2 md:mx-3 gap-x-3 gap-y-3">
    <TheSectionGrid
      index="6"
      title="iPhone 12 Pro"
      text="Behozhatatlan előnyben."
      textColor="#f5f5f7"
      imageUrlSmall="iphone12_pro_small.jpg"
      imageUrlMedium="iphone12_pro_medium.jpg"
      imageUrlLarge="iphone12_pro_large.jpg"
      imageUrl="tv_logo_large.png"
    />
    <TheSectionGrid
      index="5"
      title="Karakteres színek."
      textColor="#1d1d1f"
      imageUrlSmall="watch_small.jpg"
      imageUrlMedium="watch_medium.jpg"
      imageUrlLarge="watch_large.jpg"
      imageUrl="tv_logo_large.png"
    /><TheSectionGrid
      index="4"
      title="AirTag"
      text="Nem hagyja, hogy elhagyd."
      textColor="#1d1d1f"
      imageUrlSmall="airtag_small.jpg"
      imageUrlMedium="airtag_medium.jpg"
      imageUrlLarge="airtag_large.jpg"
      imageUrl="tv_logo_large.png"
    />
    <TheSectionGrid
      index="3"
      title="Élvezetesebb tévézés."
      textColor="#1d1d1f"
      imageUrlSmall="tv_small.jpg"
      imageUrlMedium="tv_medium.jpg"
      imageUrlLarge="tv_large.jpg"
      imageUrl="tv_logo_large.png"
      hide="block"
    />
    <TheSectionGrid
      index="2"
      title="Amitől Mac."
      text="Elképesztően erős. Hihetetlenül felhasználóbarát"
      textColor="#1d1d1f"
      imageUrlSmall="mac_small.jpg"
      imageUrlMedium="mac_medium.jpg"
      imageUrlLarge="mac_large.jpg"
      imageUrl="tv_logo_large.png"
      hide="none"
    />
    <TheSectionGridBottom
      index="1"
      text="Egy évig ingyen jár az Apple TV+, ha Apple készüléket vásárolsz."
      textColor="#f5f5f7"
      imageUrlSmall="tv_plus_small.jpg"
      imageUrlMedium="tv_plus_medium.jpg"
      imageUrlLarge="tv_plus_large.jpg"
      imageUrl="tv_plus_logo_medium.png"
      hide="block"
    />
  </div>
  <TheFooter />
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import onlineShop from "./components/onlineShop";
import TheSection from "./components/TheSection";
import TheSectionGrid from "./components/TheSectionGrid";
import TheSectionGridBottom from "./components/TheSectionGridBottom";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: {
    TheNavbar,
    onlineShop,
    TheSection,
    TheSectionGrid,
    TheSectionGridBottom,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

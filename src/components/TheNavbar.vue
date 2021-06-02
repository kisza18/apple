<template>
  <nav class="text-white pl-5 pr-5 fixed w-full z-50">
    <!-- mobile menu -->
    <div class="mobile-nav md:hidden">
      <ul class="mobile-menu flex items-center justify-between">
        <li>
          <button
            class="menu flex flex-col outline-none focus:outline-none"
            @click="toggleNav"
          >
            <span class="ham ham-top block bg-gray-400"></span>
            <span class="ham ham-bottom block bg-gray-400"></span>
          </button>
        </li>
        <li><a class="logo-mobile block" href=""></a></li>
        <li><a class="bag block" href=""></a></li>
      </ul>
    </div>
    <!-- desktop menu -->
    <div class="hidden md:block max-w-5xl mx-auto">
      <ul class="menu flex items-center justify-between">
        <li><a class="logo block" href=""></a></li>
        <li><a class="text-sm" href="">Mac</a></li>
        <li><a class="text-sm" href="">iPad</a></li>
        <li><a class="text-sm" href="">iPhone</a></li>
        <li><a class="text-sm" href="">Watch</a></li>
        <li><a class="text-sm" href="">TV</a></li>
        <li><a class="text-sm" href="">Music</a></li>
        <li>
          <a class="text-sm" href="">Támogatás</a>
        </li>
        <li><a class="search block" href=""></a></li>
        <li><a class="bag block" href=""></a></li>
      </ul>
    </div>
    <!-- mobile menu -->
    <div class="mobile-list sm:block md:hidden max-w-xl mx-auto">
      <ul v-if="showNav" class="menu px-5 pt-2 h-screen">
        <div>
          <input
            class="w-full py-2 px-4 rounded-xl mb-3"
            type="text"
            placeholder="Keresés az apple.com oldalon"
          />
        </div>
        <div class="line"></div>
        <div class="top-20 left-5 right-5">
          <li class="py-3"><a class="text-md" href="">Mac</a></li>
          <div class="line"></div>
          <li class="py-3"><a class="text-md" href="">iPad</a></li>
          <div class="line"></div>
          <li class="py-3"><a class="text-md" href="">iPhone</a></li>
          <div class="line"></div>
          <li class="py-3"><a class="text-md" href="">Watch</a></li>
          <div class="line"></div>
          <li class="py-3"><a class="text-md" href="">TV</a></li>
          <div class="line"></div>
          <li class="py-3"><a class="text-md" href="">Music</a></li>
          <div class="line"></div>
          <li class="py-3">
            <a class="text-md " href="">Támogatás</a>
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #141414;
}
input {
  background-color: #1d1d1f;
}
.ham {
  height: 1px;
  width: 17px;
  margin: 3px 0;
  transition: margin-top 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96);
}
.line {
  height: 1px;
  background: #424245;
}
.menu a {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  padding: 14px 0;
}
.menu a:hover {
  opacity: 1;
}
.logo {
  background-image: url("../assets/logos/logo.svg");
  background-size: 16px 44px;
  background-position: center center;
  background-repeat: no-repeat;
  height: 44px;
  width: 16px;
}
.logo-mobile {
  background-image: url("../assets/logos/logo.svg");
  background-size: 19px;
  background-position: center center;
  background-repeat: no-repeat;
  height: 48px;
  width: 20px;
}
.search {
  background-image: url("../assets/logos/search.svg");
  background-size: 18px 88px;
  background-repeat: no-repeat;
  height: 44px;
  width: 18px;
}
.bag {
  background-image: url("../assets/logos/bag.svg");
  background-size: 17px 44px;
  background-position: center center;
  background-repeat: no-repeat;
  height: 44px;
  width: 17px;
}
.mobile-menu a {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  font-size: 17px;
}
.mobile-menu a:hover {
  opacity: 1;
}
.mobile-nav {
  background-color: #141414;
}
.mobile-list {
  background: #141414;
}
</style>

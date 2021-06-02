<template>
  <div class="mt-3 bg-gray-100 p-5">
    <div class="max-w-5xl mx-auto">
      <div>
        <p class="text-gray-400 text-xs">
          1. Az ingyenes próbaidőszak után havonta 1890 Ft. A Családi
          megosztásban egy csoport egy közös előfizetést használhat. A
          szolgáltatás használatát ajánlatunk keretében a jogosult eszköz
          aktiválásától számított három hónapon belül lehet megkezdeni. Az
          előfizetés annak lemondásáig automatikusan megújul. Az ajánlat
          korlátozottan, további
          <a
            href=""
            class="text-gray-500 hover:underline hover:text-gray-600 cursor-pointer"
            >feltételekkel</a
          >
          érvényes.
        </p>
        <p class="text-gray-400 text-xs mt-3">
          Egyes funkciók, alkalmazások és szolgáltatások nem minden országban,
          illetve térségben vehetők igénybe.
        </p>
      </div>
      <hr class="my-5" />
      <!--grid-->
      <div>
        <div class="grid grid-cols-1 md:grid-cols-5 grid-rows-1">
          <!--grid 1-->
          <div class="border-b border-gray-300 md:border-none py-2 md:py-0">
            <h4 class="text-xs text-gray-600 font-semibold">
              Vásárlás és információ
              <div class="mt-2 hidden md:block">
                <ul v-for="elem in tomb1" :key="elem" class="text-gray-400">
                  <li class="py-1">
                    <a class="hover:underline hover:text-gray-600" href="">{{
                      elem
                    }}</a>
                  </li>
                </ul>
              </div>
            </h4>
          </div>
          <!--grid 2-->
          <div>
            <div class="border-b border-gray-300 md:border-none py-2 md:py-0">
              <h4 class="text-xs text-gray-600 font-semibold">
                Szolgáltatások
                <div class="mt-2 hidden md:block">
                  <ul v-for="elem in tomb2" :key="elem" class="text-gray-400">
                    <li class="py-1">
                      <a class="hover:underline hover:text-gray-600" href="">{{
                        elem
                      }}</a>
                    </li>
                  </ul>
                </div>
              </h4>
            </div>
            <div
              class="md:mt-5 border-b border-gray-300 md:border-none py-2 md:py-0"
            >
              <h4 class="text-xs text-gray-600 font-semibold">
                Fiók
                <div class="mt-2 hidden md:block">
                  <ul v-for="elem in tomb3" :key="elem" class="text-gray-400">
                    <li class="py-1">
                      <a class="hover:underline hover:text-gray-600" href="">{{
                        elem
                      }}</a>
                    </li>
                  </ul>
                </div>
              </h4>
            </div>
          </div>
          <!--grid 3-->
          <div class="border-b border-gray-300 md:border-none py-2 md:py-0">
            <h4 class="text-xs text-gray-600 font-semibold">
              Apple Store
              <div class="mt-2 hidden md:block">
                <ul v-for="elem in tomb4" :key="elem" class="text-gray-400">
                  <li class="py-1">
                    <a class="hover:underline hover:text-gray-600" href="">{{
                      elem
                    }}</a>
                  </li>
                </ul>
              </div>
            </h4>
          </div>
          <!--grid 4-->
          <div>
            <div class="border-b border-gray-300 md:border-none py-2 md:py-0">
              <h4 class="text-xs text-gray-600 font-semibold">
                Üzleti megoldások
                <div class="mt-2 hidden md:block">
                  <ul v-for="elem in tomb5" :key="elem" class="text-gray-400">
                    <li class="py-1">
                      <a class="hover:underline hover:text-gray-600" href="">{{
                        elem
                      }}</a>
                    </li>
                  </ul>
                </div>
              </h4>
            </div>
            <div
              class="md:mt-5 border-b border-gray-300 md:border-none py-2 md:py-0"
            >
              <h4 class="text-xs text-gray-600 font-semibold">
                Oktatás
                <div class="md:mt-2 hidden md:block">
                  <ul v-for="elem in tomb6" :key="elem" class="text-gray-400">
                    <li class="py-1">
                      <a class="hover:underline hover:text-gray-600" href="">{{
                        elem
                      }}</a>
                    </li>
                  </ul>
                </div>
              </h4>
            </div>
          </div>
          <!--grid 5-->
          <div>
            <div class="border-b border-gray-300 md:border-none py-2 md:py-0">
              <h4 class="text-xs text-gray-600 font-semibold">
                Az Apple értékei
                <div class="mt-2 hidden md:block">
                  <ul v-for="elem in tomb7" :key="elem" class="text-gray-400">
                    <li class="py-1">
                      <a class="hover:underline hover:text-gray-600" href="">{{
                        elem
                      }}</a>
                    </li>
                  </ul>
                </div>
              </h4>
            </div>
            <div
              class="md:mt-5 border-b border-gray-300 md:border-none py-2 md:py-0"
            >
              <h4 class="text-xs text-gray-600 font-semibold">
                Tudnivalók az Apple-ről
                <div class="md:mt-2 hidden md:block">
                  <ul v-for="elem in tomb8" :key="elem" class="text-gray-400">
                    <li class="py-1">
                      <a class="hover:underline hover:text-gray-600" href="">{{
                        elem
                      }}</a>
                    </li>
                  </ul>
                </div>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <!--footer-->
      <div>
        <div class="mt-8">
          <p class="text-gray-400 text-xs">
            További vásárlási lehetőségek:
            <a class="text-blue-500 hover:underline" href=""
              >keress egy viszonteladót</a
            >
            a közeledben, vagy hívj minket: 06 80 983 824.
          </p>
        </div>
        <hr class="my-2" />
        <p class="text-gray-400 text-xs">
          Copyright © 2021 Apple Inc. Minden jog fenntartva.
        </p>
        <div class="flex flex-wrap my-1 overflow-hidden">
          <div>
            <a
              class="text-xs text-gray-500 hover:underline hover:text-gray-700 border-r mr-3 pr-3 border-gray-300"
              href=""
              >Adatvédelmi szabályzat</a
            >
          </div>
          <div>
            <a
              class="text-xs text-gray-500 hover:underline hover:text-gray-700 border-r mr-3 pr-3 border-gray-300"
              href=""
              >Sütik használata</a
            >
          </div>
          <div>
            <a
              class="text-xs text-gray-500 hover:underline hover:text-gray-700 border-r mr-3 pr-3 border-gray-300"
              href=""
              >Használati feltételek</a
            >
          </div>
          <div>
            <a
              class="text-xs text-gray-500 hover:underline hover:text-gray-700 border-r mr-3 pr-3 border-gray-300"
              href=""
              >Értékesítés és visszatérítés</a
            >
          </div>
          <div>
            <a
              class="text-xs text-gray-500 hover:underline hover:text-gray-700 border-r mr-3 pr-3 border-gray-300"
              href=""
              >Jogi megjegyzések</a
            >
          </div>
          <div>
            <a
              class="text-xs text-gray-500 hover:underline hover:text-gray-700"
              href=""
              >Webhelytérkép</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      tomb1: [
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "TV",
        "Music",
        "AirPods",
        "iPod touch",
        "AirTag",
        "Tartozékok",
      ],
      tomb2: [
        "Apple Music",
        "Apple TV+",
        "Apple Arcade",
        "iCloud",
        "Apple One",
        "Apple Pay",
        "App Store",
      ],
      tomb3: ["Apple ID kezelése", "Apple Store-fiók", "iCloud.com"],
      tomb4: [
        "Online vásárlás",
        "Apple Store app",
        "Rendelés állapota",
        "Vásárlási segítség",
      ],
      tomb5: ["Az Apple és az üzleti világ", "Vásárlás üzleti célra"],
      tomb6: ["Az Apple és az oktatás", "Tanuláshoz - nézz körül"],
      tomb7: ["Adatvédelem"],
      tomb8: [
        "Newsroom",
        "Apple vezetőség",
        "Karrier",
        "Jótállás",
        "Befektetői kapcsolatok",
        "Üzleti etika és törvényesség",
        "Kapcsolatfelvétel az Apple-lel",
      ],
    };
  },
};
</script>

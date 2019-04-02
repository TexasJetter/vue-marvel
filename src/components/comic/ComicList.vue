<template>
  <div>
    <transition name="fade">
      <div class="waitIndicator" v-if="showWait">
        <img class="rotate" src="/assets/Captain_America_old_shield_100.png">

      </div>
    </transition>
    <transition name="fade">
      <div>
        <div class="tile" v-for="c in comics" :key="c.id"  v-on:click="selectComic(c)">
          <img :src="getThumbnail(c)">
          <div>{{c.title}}</div>
        </div>
        <ComicDetail v-model="selectedComic"/>
      </div>
    </transition>
  </div>
</template>

<script>
import * as _comicService from "@/services/comic.js";
import ComicDetail from "@/components/comic/ComicDetail";

export default {
  name: "ComicList",
  props: ["searchString"],
  components: { ComicDetail },
  data: () => ({
    showWait: true,
    comics: [],
    selectedComic: null
  }),
  methods: {
    load() {
      this.showWait = true;
      _comicService.getComicStartsWith(this.searchString, response => {
        //console.log(response)
        this.comics = response.sort(function(a,b){ return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;});
        this.showWait = false;
      });
    },
    selectComic(c) {
      this.selectedComic = c;
    },
    getThumbnail(c) {
      if (c.thumbnail == null) {
        return "/assets/standard_medium.jpg";
      } else {
        return c.thumbnail.path + "." + c.thumbnail.extension;
      }
    }
  },
  computed: {},
  watch: {
    searchString: function() {
      this.load();
    }
  },
  mounted: function() {
    this.load();
  }
};
</script>
<style>

</style>

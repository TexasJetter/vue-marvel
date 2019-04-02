<template>
  <div>
    <transition name="fade">
      <div class="waitIndicator"  v-if="showWait">
        <img class="rotate" src="/assets/Captain_America_old_shield_100.png">
      </div>
    </transition>
    <!-- <div>CharacterList searchString:{{searchString}}</div> -->
    <transition name="fade">
      <div>
        <div class="tile" v-for="c in characters" :key="c.id" v-on:click="selectCharacter(c)">
          <img :src="getThumbnail(c)">
          <div>{{c.name}}</div>
        </div>
        <CharacterDetail v-model="selectedCharacter"/>
      </div>
    </transition>
  </div>
</template>

<script>
import * as _characterService from "@/services/character.js";
import CharacterDetail from "@/components/character/CharacterDetail";

export default {
  name: "CharacterList",
  props: ["searchString"],
  components: { CharacterDetail },
  data: () => ({
    showWait: true,
    characters: [],
    selectedCharacter: null
  }),
  methods: {
    load() {
      this.showWait = true;
      _characterService.getCharacterStartsWith(this.searchString, response => {
        //console.log(response)
        this.characters = response.sort(function(a,b){ return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;});
        this.showWait = false;
      });
    },
    selectCharacter(c) {
      this.selectedCharacter = c;
    },
    getThumbnail(character) {
      if (character.thumbnail == null) {
        return "/assets/standard_medium.jpg";
      } else {
        return character.thumbnail.path + "." + character.thumbnail.extension;
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

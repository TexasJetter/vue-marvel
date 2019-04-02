<template>
  <transition name="fade">
    <div class="modal-container" v-if="value != null"  @click="close()">
      <div class="modal-detail">
        <div class="close-x" @click="close()">X</div>
        <h3>{{value.name}}</h3>
        <img :src="getThumbnail(value)">
        <div>{{value.description}}</div>
        <div>
          {{value.characters.available}} Characters,
          {{value.creators.available}} Creators,
          {{value.events.available}} Events, and
          {{value.stories.available}} Stories
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ComicDetail",
  props: ["value"],
  components: {},
  data: () => ({}),
  methods: {
    close() {
      this.$emit("input", null);
    },
    getThumbnail(comic) {
      if (comic.thumbnail == null) {
        return "/assets/standard_medium.jpg";
      } else {
        return comic.thumbnail.path + "." + comic.thumbnail.extension;
      }
    }
  },
  computed: {},
  watch: {},
  mounted: function() {}
};
</script>
<style>

</style>

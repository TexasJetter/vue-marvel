<template>
  <transition name="fade">
    <div class="modal-container" v-if="value != null"  @click="close()">
      <div class="modal-detail">
        <div class="close-x" @click="close()">X</div>
        <h3>{{value.name}}</h3>
        <img :src="getThumbnail(value)">
        <div>{{value.description}}</div>
        <div>
          Appears in {{value.comics.available}} Comics,
          {{value.series.available}} Series, and
          {{value.stories.available}} Stories
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CharacterDetail",
  props: ["value"],
  components: {},
  data: () => ({}),
  methods: {
    close() {
      this.$emit("input", null);
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
  watch: {},
  mounted: function() {}
};
</script>
<style>

</style>

<template>
  <div>
    <h3>Comics (starting with: {{searchString}})</h3>
    <Alphabet v-model="searchString"/>
    <ComicList v-bind:searchString="searchString"/>
  </div>
</template>

<script>
import Alphabet from "@/components/shared/Alphabet";
import ComicList from "@/components/comic/ComicList";

export default {
  name: "Comics",
  components: {Alphabet,ComicList },
  data: () => ({
    searchString: "a"
  }),
  methods: {
   
  },
  computed: {},
  mounted: function() {}
};
</script>
<style>

</style>

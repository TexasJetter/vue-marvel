<template>
  <div>
    <h3>Characters (starting with: {{searchString}})</h3>
    <Alphabet v-model="searchString"/>
    <CharacterList v-bind:searchString="searchString"/>
  </div>
</template>

<script>
import Alphabet from "@/components/shared/Alphabet";
import CharacterList from "@/components/character/CharacterList";
export default {
  name: "characters",
  components: {Alphabet, CharacterList },
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

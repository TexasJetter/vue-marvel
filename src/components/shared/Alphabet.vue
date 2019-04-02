<template>
    <div class="alphabet">
      <div v-for="(l, index) in letters" :key="index">
        <div v-on:click="setSearchString(l)" :class="{active : isActive(l)  }">{{l.toUpperCase()}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Alphabet",
  components: {},
  props: ["value"],
  data: () => ({
    letters: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    currentChar: ""
  }),
  methods: {
    setSearchString(char) {
      this.currentChar = char;
      this.$emit("input", char);
    },
    isActive(char) {
      if (char == null || char.length == 0) return false;
      if (this.currentChar == null || this.currentChar.length == 0)
        return false;
      return this.currentChar.toLowerCase().indexOf(char.toLowerCase()) > -1;
    }
  },
  computed: {},
  watch: {},
  mounted: function() {
    this.currentChar = this.value;
  }
};
</script>
<style>
.alphabet {
  text-align: center;
  margin-bottom:25px;
}
.alphabet > div {
  display: inline;
}
.alphabet > div > div {
  display: inline;
  margin: 1px;
  padding:5px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.alphabet > div > div:hover {
  border-bottom: 2px solid black;
  background-color: rgba(0, 128, 0, 0.12);
}
.alphabet > div > div.active {
  font-weight: bold;
  border-bottom: 2px solid green;
  color: green;
}
</style>
